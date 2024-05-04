create table administrator(
    id_administrator serial primary key,
    username varchar(255) not null,
    email varchar(255) not null,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    address_location varchar(500) not null,
    city varchar(255) not null,
    country varchar(255) not null,
    postal_code varchar(255) not null,
    about varchar(500) not null,
    image_url text not null
);