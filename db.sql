-- create the table DDL (database definition language)
create table greetings(
id integer PRIMARY KEY AUTOINCREMENT,
language text,
greeting text
);

-- DML (database mainipulation language)

select * from greetings;

select count(*) from greetings;


insert into greetings (language, greeting) values ('zulu', 'sawubona');
insert into greetings (language, greeting) values ('xitsonga', 'avusheni');

-- add two more languages
