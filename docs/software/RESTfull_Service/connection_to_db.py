import psycopg2


conn = psycopg2.connect(
    database="postgres",
    user="User",
    password="1234567890",
    host="localhost",
    port="5432"
)

