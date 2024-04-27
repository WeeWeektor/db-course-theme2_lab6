# Реалізація інформаційного та програмного забезпечення
  
## SQL-Скрипт для створення початкового наповнення бази даних

```sql
<!-- @include: ./sql/db.sql -->
```

## RESTfull сервіс для управління даними

### RESTfull_servise для управління даними таблиці Datafiles створеної в PostgreSQL було створено за допомогою фреймворку flask на мові Python. 

### Підєднання до бази даних

```
<!-- @include: ./RESTfull_Service/connection_to_db.py -->
```

### Модуль відповідальний за видалення даних з бази даних

```
<!-- @include: ./RESTfull_Service/delete_data_from_db.py -->
```

### Модуль відповідальний за отримання даних з бази даних

```
<!-- @include: ./RESTfull_Service/get_data_from_db.py -->
```

### Модуль відповідальний за запис даних до бази даних

```
<!-- @include: ./RESTfull_Service/insert_data_to_db.py -->
```

### Rest API з всіма Endpoint

```
<!-- @include: ./RESTfull_Service/RESTfull_Service.py -->
```
