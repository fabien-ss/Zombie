create database patte_sardine_rencontre;
\c patte_sardine_rencontre;

create table users(
    id_user serial primary key,
    user_name varchar(255) not null,
    first_name varchar(255) not null,
    user_password varchar(255) not null,
    user_mail varchar(255) unique,
    source_photo varchar(255) not null,
    birth date not null,
    sexe int not null,
);  

create table standart(
    id_standart serial primary key,
    standart varchar(255) not null,
    isNumeric boolean not null
);

create table details_standart(
    id_details_standart serial primary key,
    id_standart int references standart(id_standart),
    min int default 0,
    max int default 0,
    coefficient int,
    details varchar(255) not null
);

create table standart_user (
    id_standart_user serial primary key,
    id_details_standart int references details_standart(id_details_standart),
    coefficient int not null,
    id_user int references users(id_user)
);