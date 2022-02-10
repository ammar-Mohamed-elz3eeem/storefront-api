CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    email VARCHAR(255),
    password VARCHAR(255),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW() 
);