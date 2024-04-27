from psycopg2 import errors


def delete_data(cur, guid, user_email, id=None):
    try:
        cur.execute(f'''SELECT id, role_id FROM "Users" WHERE email = %s''', (user_email,))
        get_data = cur.fetchone()
        if get_data[1] == 1:
            if id is None:
                delete_data_from_db = f'''DELETE FROM "Datafiles" WHERE guid = %s'''
                data = (guid,)
            else:
                delete_data_from_db = f'''DELETE FROM "Datafiles" WHERE guid = %s AND id = %s'''
                data = (guid, id)
            cur.execute(delete_data_from_db, data)
            cur.connection.commit()
            return "Data delete successful!"
        elif get_data[1] == 2:
            return {'error': 'Access denied'}
        else:
            return {'data': "Ви не зареєстровані в системі"}
    except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction) as e:
        raise e
    except TypeError:
        raise
    finally:
        cur.close()
