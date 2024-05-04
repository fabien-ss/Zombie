create table chapitre(
    id_chapitre int auto_increment primary key,
    chapitre varchar(255)
);

create table details_chapitre(
    id_details_chapitre int auto_increment primary key,
    id_chapitre int,
    titre varchar(255),
    url_photo varchar(255),
    foreign key (id_chapitre) references chapitre(id_chapitre)
);

create table paragraphes(
    id_paragraphes int auto_increment primary key,
    id_details_chapitre int,
    paragraphes varchar(255),
    foreign key (id_details_chapitre) references details_chapitre(id_details_chapitre)
);

create table users(
    id_user int auto_increment primary key,
    user_name varchar(255) not null,
    first_name varchar(255) not null,
    user_password varchar(255) not null,
    user_mail varchar(255) unique,
    source_photo varchar(255) not null,
    date_mort date not null,
    vetements varchar(255) -- tete au pieds
);

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

CREATE TABLE quizz (
    id_quizz INT AUTO_INCREMENT PRIMARY KEY,
    id_chapitre INT,
    point_total INT,
    FOREIGN KEY (id_chapitre) REFERENCES chapitre(id_chapitre)
);

CREATE TABLE QUESTIONS_QUIZZ (
    id_questions_quizz INT AUTO_INCREMENT PRIMARY KEY,
    id_quizz INT,
    questions VARCHAR(255),
    est_difficile BOOLEAN,
    audio VARCHAR(255) DEFAULT NULL,
    url_photo VARCHAR(255),
    est_exercice_humain boolean default false,
    FOREIGN KEY (id_quizz) REFERENCES quizz(id_quizz)
);

CREATE TABLE REPONSES_QUESTIONS (
    id_reponses_questions INT AUTO_INCREMENT PRIMARY KEY,
    id_questions_quizz INT,
    reponses VARCHAR(255),
    est_vraie BOOLEAN default false,
    FOREIGN KEY (id_questions_quizz) REFERENCES QUESTIONS_QUIZZ(id_questions_quizz)
);

CREATE TABLE USERS_QUIZZ (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT REFERENCES users(id_user),
    id_quizz INT,
    score INT,
    FOREIGN KEY (id_quizz) REFERENCES quizz(id_quizz)
);

CREATE TABLE REPONSES_QUIZZ (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT REFERENCES users(id_user),
    id_question INT,
    id_reponse INT,
    FOREIGN KEY (id_question) REFERENCES QUESTIONS_QUIZZ(id_questions_quizz),
    FOREIGN KEY (id_reponse) REFERENCES REPONSES_QUESTIONS(id_reponses_questions)
);

CREATE TABLE USERS_CHAPITRE (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT REFERENCES users(id_user),
    id_chapitre INT,
    FOREIGN KEY (id_chapitre) REFERENCES chapitre(id_chapitre)
);