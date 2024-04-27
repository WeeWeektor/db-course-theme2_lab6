from psycopg2 import errors


def get_all_data(cur):
    cur.execute('''SELECT json_build_object(
                          'id', id,
                          'guid', guid,
                          'alias', alias,
                          'mime', mime,
                          'description', description,
                          'size', size,
                          'uploadedAt', "uploadedAt",
                          'user_id', user_id,
                          'url', url
                          ) AS data
                          FROM "Datafiles"''')
    get_data = cur.fetchall()
    cur.close()
    return {'data': get_data}


def get_data_description(cur, guid):
    try:
        cur.execute(f'''SELECT json_build_object(
                            'id', id, 
                            'description', description 
                            ) AS data
                            FROM "Datafiles" 
                            WHERE guid = %s''', (guid,))
        get_data = cur.fetchall()
        if get_data:
            return {'data': get_data}
        else:
            return {'data': "Неіснує даних з таким guid"}
    except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction) as e:
        raise e
    finally:
        cur.close()


def get_data_info(cur, guid):
    try:
        cur.execute(f'''SELECT json_build_object(
                          'id', id,
                          'guid', guid,
                          'alias', alias,
                          'mime', mime,
                          'size', size,
                          'uploadedAt', "uploadedAt",
                          'user_id', user_id,
                          'url', url
                          ) AS data
                          FROM "Datafiles" 
                          WHERE guid = %s''', (guid,))
        get_data = cur.fetchall()
        if get_data:
            return {'data': get_data}
        else:
            return {'data': "Неіснує даних з таким guid"}
    except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction) as e:
        raise e
    finally:
        cur.close()
