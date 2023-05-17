MySQL commands for Database design of IMDB movies 

Create MYSQL database

1.create database 
IMDB_server ;

Grant permissions to user 

2.grant all privileges on IMDB_server.* to 
jaideep@localhost identified by '123pwd';
create user 
jaideep@localhost identified by '123pwd';  

Create Movie table
3.CREATE TABLE movies_table(  
    movie_id int NOT NULL AUTO_INCREMENT,  
    movie_name varchar(45) NOT NULL,  
    director_name varchar(45) NOT NULL, 
    media_types varchar(45) NOT NULL,  
studio varchar(35) NOT NULL,
producer_id int NOT NULL,
    release_date date NOT NULL,  
    PRIMARY KEY (movie_id)  
); 

INSERT INTO movies_table(movie_name,director_name,media_types,studio,producer_id,release_date) values("BABY","Neeray Pandey","Video","Bombay Talkies",1,"2015-01-15")
 
Create Genre table for movies
4.CREATE TABLE movie_genres(  
    genre_id int NOT NULL AUTO_INCREMENT,  
    genre _name varchar(35), movie_id int NOT NULL,
          PRIMARY KEY (genre_id)
INSERT INTO movie_generes(genere_name,movie_id) values("20thcen",1)

Create Reviews table 

5.CREATE TABLE movie_reviews(
 id int NOT NULL,  
    movie_id int NOT NULL , 
     movie_length_minutes int NOT NULL,
    ratings float NOT NULL,
 reviews varchar(255) NOT NULL,
  username varchar(45) NOT NULL,
       PRIMARY KEY (id));
INSERT INTO movie_reviews(movie_id,movie_length,ratings,reviews,username) values(1,210,9,8.5,jaideep)


 Create Artists table 

6.CREATE TABLE artist_table(  
    artist_id int NOT NULL AUTO_INCREMENT,  
    artist_name varchar(45) NOT NULL,  
    gender varchar(35) NOT NULL,  
    skill1 varchar(35), 
   skill2 varchar(35),
skill3 varchar(35),
    PRIMARY KEY (artist_id));
INSERT INTO artist_table(artist_name,gender,skill1,skill2,skill3) values("Akshay Kumar","Male","Actor","Producer",ActionDirector")
 

Create mutltiple roles in same movie

7.CREATE TABLE multipleroles(  
    id int NOT NULL AUTO_INCREMENT,  
    movie_id int NOT NULL,  
    artist_id int NOT NULL,  
    no_of_roles varchar(25) NOT NULL,  
    PRIMARY KEY (id));
INSERT INTO multipleroles(movie_id,artist_id,no_of_roles) vales(1,1,"NA")


 

