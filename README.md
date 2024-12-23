# databaseControl


### SETUP

Start local DB
> docker compose up --build 

> yarn dev

localhost:3000


### DB Structure

Projecs share 1 database, entites can be routed by directory.

- switch to postgress SQL
- supabase initial start (have account)
- use 1 DB for all projects to save cost
- projectname_tablename
    - dahlias_rds
    - dahlias_users

    - storage_categories
    - storage_items
    - storage_users

    - lists_toOo

- stale data can be moved to s3 someday