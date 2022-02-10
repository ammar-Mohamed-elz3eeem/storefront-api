# storefront-backend-project 👋
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> A node-express-typescript application providing restful api endpoints to manage users, products and user orders for an online store.

## Table of Contents

- [Prerequisites](#Prerequisites)
- [Installition](#Install)
- [Database Setup](#Database-Setup)
- [Environment variables](#Environment-variables)
- [Usage](#Usage)
- [Run Tests](#Run-Tests)
- [Technologoies used in the project](#Technologoies-used-in-the-project)
- [Author](#Author)
- [Show your support](#Show-your-support)

## Prerequisites

* npm >= 6.9.0
* node >= 12.0.0

## Install
Run the following command in the projects root folder to install dependencies. All provided yarn commands are run at the root level of the project.
```sh
npm install
```

## Database Setup (for both development and test databases)
The server application is configured to run with a Postgresql database running with the following settings:
* Host: 127.0.0.1
* Port: 5432
* Database user: "shopping_user"
* Database name: "shopping"
* Test database name: "shopping_test"

To set up the database (dev + test), there are two ways:

- First: Manually: use the following commands in postgresql environment:

```sh
  CREATE USER store_admin WITH PASSWORD 'PASSWORD_HERE';
  CREATE DATABASE store; 
  GRANT ALL PRIVILEGES ON DATABASE store TO store_admin;
  CREATE DATABASE store_test;
  GRANT ALL PRIVILEGES ON DATABASE store_test TO store_admin;
```

- Second: Automatically

* Insert postgres user and password information on the initDB.js File (user of postgress must be able to create DB)
* run this command in your terminal 
    ```sh
        npm run initdb
    ```
* Now you have two databases one for test usage and one for development process

> A .env file should also be created containing variables with names matching those seen
in the database.json file and values from your own choice and containing all the settings above.

## Environment variables
A .env file is required to hold environment variables for project. Create a .env file and copy the
following into it.
```sh
PG_HOST=127.0.0.1
PG_PORT=\<<POSTGRES_PORT\>>
PG_DATABASE=POSTGRES_DATABASE
PG_TEST_DATABASE=POSTGRES_TEST_DATABASE
PG_USER=POSTGRES_USERNAME
PG_PASSWORD=YOURPASSWORD
NODE_ENV=dev
PRIVATE_KEY=YOUR_SECRET_HASHED_PASSWORD
SALT_ROUNDS=10
PAYLOAD_STRING=
```

## Usage
To start the server appplication run the following command. 

```sh
npm run watch
```
The application is configured to run on localhost port 3000 - http://localhost:3000.

## Run tests
To run available tests, use following command.

```sh
npm test
```
This temporarily modifies the ENV key in environment variables from 'dev' to 'test' and runs migrations to setup the test database to be used for testing.
The test database is then removed after tests are complete.

## Technologoies used in the project

this project have been Initialized using nodejs with some helpful packages from npm (node package manager)

- express
- typescript
- jasmine ( For unit testing )
- supertest ( For Testing Endpoints )
- ts-node ( To run typescript files )
- bcrypt ( Password Hashing )
- jsonWebToken ( JWT to make tokens for users )
- pg ( For connecting with postgres Database )
- db-migrations ( to make the migrations for Database Schema )

## Author

Ammar Mohamed Massoud

## Show your support

Give a ⭐️ if this project helped you!
