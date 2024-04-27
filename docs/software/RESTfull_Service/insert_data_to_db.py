from psycopg2 import errors


def insert_data(cur, guid, alias, mime, description, size, uploadedAt, url, user_email):
    try:
        cur.execute(f'''SELECT id, role_id FROM "Users" WHERE email = %s''', (user_email,))
        get_data = cur.fetchone()
        if get_data[1] == 1:
            cur.execute('SELECT MAX(id) FROM "Datafiles" ')
            next_id = cur.fetchall()
            insert_data_to_db = (f'''INSERT INTO "Datafiles"(
	                                 id, guid, alias, mime, description, size, "uploadedAt", user_id, url)
                                     VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)''')
            data = (next_id[-1][0]+1, guid, alias, mime, description, size, uploadedAt, get_data[0], url)
            cur.execute(insert_data_to_db, data)
            cur.connection.commit()
            return "Data insert successful!"
        elif get_data[1] == 2:
            return {'error': 'Access denied'}
        else:
            return {'data': "Ви не зареєстровані в системі"}
    except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction,
            errors.StringDataRightTruncation) as e:
        raise e
    except TypeError:
        raise
    finally:
        cur.close()
