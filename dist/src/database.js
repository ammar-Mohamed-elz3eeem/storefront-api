"use strict";
exports.__esModule = true;
exports.client = void 0;
var pg_1 = require("pg");
require("dotenv").config();
exports.client = new pg_1.Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.NODE_ENV === "test" ? process.env.PG_TEST_DATABASE : process.env.PG_DATABASE
});
