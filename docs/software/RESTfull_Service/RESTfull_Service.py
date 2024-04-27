from flask import Flask, jsonify, request
from psycopg2 import errors
from pytz import timezone

import datetime
import uuid
import connection_to_db
import get_data_from_db
import insert_data_to_db
import delete_data_from_db


app = Flask(__name__)


@app.route('/get_data', methods=['GET'])
def get_data():
    with connection_to_db.conn.cursor() as cur:
        data = get_data_from_db.get_all_data(cur)
    return jsonify(data)


@app.route('/get_description', methods=['POST'])
def get_description():
    request_data = request.get_json()
    guid = request_data.get('guid')
    if guid:
        try:
            with connection_to_db.conn.cursor() as cur:
                data = get_data_from_db.get_data_description(cur, guid)
            return jsonify(data)
        except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction) as e:
            connection_to_db.conn.rollback()
            return jsonify({'error': str(e)}), 400
    else:
        return jsonify({'error': 'Missing guid parameter'}), 400


@app.route('/get_info_data', methods=['POST'])
def get_info_data():
    request_data = request.get_json()
    guid = request_data.get('guid')
    if guid:
        try:
            with connection_to_db.conn.cursor() as cur:
                data = get_data_from_db.get_data_info(cur, guid)
            return jsonify(data)
        except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction) as e:
            connection_to_db.conn.rollback()
            return jsonify({'error': str(e)}), 400
    else:
        return jsonify({'error': 'Missing guid parameter'}), 400


@app.route('/insert_data', methods=['POST'])
def insert_new_data():
    request_data = request.get_json()
    guid = request_data.get('guid')
    if guid is None:
        guid = uuid.uuid4()
    uploadedAt = get_time()
    alias = request_data.get('alias')
    mime = request_data.get('mime')
    description = request_data.get('description')
    size = request_data.get('size')
    url = request_data.get('url')
    user_email = request_data.get('user_email')
    if alias and mime and description and size and url and user_email:
        try:
            with connection_to_db.conn.cursor() as cur:
                data = insert_data_to_db.insert_data(cur, str(guid), alias, mime, description, size, uploadedAt,
                                                     url, user_email)
            return jsonify(data)
        except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction,
                errors.StringDataRightTruncation) as e:
            return jsonify({'error': str(e)}), 400
        except TypeError:
            return jsonify({'error': 'This user not find'}), 400
        finally:
            connection_to_db.conn.rollback()
    else:
        return jsonify({'error': 'Missing parameters'}), 400


@app.route('/delete_data', methods=['DELETE'])
def delete_data():
    request_data = request.get_json()
    id = request_data.get('id')
    guid = request_data.get('guid')
    user_email = request_data.get('user_email')
    if guid and user_email:
        try:
            with connection_to_db.conn.cursor() as cur:
                if id is not None:
                    data = delete_data_from_db.delete_data(cur, str(guid), user_email, id)
                else:
                    data = delete_data_from_db.delete_data(cur, str(guid), user_email)
            return jsonify(data)
        except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction) as e:
            return jsonify({'error': str(e)}), 400
        except TypeError:
            return jsonify({'error': 'This user not find'}), 400
        finally:
            connection_to_db.conn.rollback()
    else:
        return jsonify({'error': 'Missing parameters'}), 400




def get_time():
    uk_timezone = timezone("Europe/kiev")
    current_time = datetime.datetime.now(uk_timezone)
    time_str = current_time.strftime("%Y-%m-%d %H:%M:%S")
    return time_str


if __name__ == '__main__':
    app.run()
