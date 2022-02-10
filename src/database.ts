import { Pool } from "pg";
require("dotenv").config();

export const client: Pool = new Pool({
    host: process.env.PG_HOST!,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.NODE_ENV === "test" ? process.env.PG_TEST_DATABASE : process.env.PG_DATABASE
});