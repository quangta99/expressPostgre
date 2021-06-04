CREATE DATABASE todo
CREATE TABLE todos(
    id SERIAL PRIMARY KEY,
    title varchar(40),
    desctiption varchar(60)
);

insert into todos (title, desctiption) values ('Swimming', 'at 4pm'),('Working', 'from 8h30am to 6pm');