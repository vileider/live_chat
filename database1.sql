Create TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) UNIQUE NOT NULL,
  bio VARCHAR(255),
  register_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  password VARCHAR(255),
  avatar VARCHAR(255),
  total_messages INT,
  PRIMARY KEY (id)
);


CREATE TABLE global_messages (
  id INT NOT NULL AUTO_INCREMENT,
  sender VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  content VARCHAR(255) NOT NULL,
  time_stamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (email) REFERENCES users(email)
);

CREATE TABLE private_messages (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  content VARCHAR(255) NOT NULL,
  time_stamp TIMESTAMP NOT NULL,
  sender VARCHAR(255) NOT NULL,
  reciever VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM users;
INSERT INTO users (user_name, email, password)
VALUES ('mr John', 'email@gmail.com', '#1231$@%^');
