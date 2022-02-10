import { client } from "../database";
import { compareSync, hashSync } from "bcrypt";
import { UsersTable } from "../interfaces/User.Interfaces";
require("dotenv").config();

export class UsersModel {
    
    async index(): Promise<UsersTable[]> {
        try {
            const sql = 'SELECT * FROM users'
            const conn = await client.connect();
            const result = await conn.query(sql);
            conn.release();
            return result.rows
        } catch (error) {
            throw new Error("Can't Show all users " + error);
        }
    }

    async show(id: string): Promise<UsersTable[]> {
        try {
            const sql = 'SELECT * FROM users WHERE id=($1)'
            const conn = await client.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows
        } catch (error) {
            throw new Error("Can't Show The user " + error);
        }
    }

    async create(u: UsersTable): Promise<UsersTable> {
        try {
            const sql = 'INSERT INTO users (username, firstname, lastname, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING id, username, firstname, lastname, email';
            const conn = await client.connect();
            const hashedPassword = hashSync(u.password+process.env.SALT_AND_PEPPER, parseInt(process.env.SALT_ROUNDS as string));
            const result = await conn.query(sql, [u.username, u.firstname, u.lastname, u.email, hashedPassword]);
            conn.release();
            return result.rows[0]
        } catch (error) {
            throw new Error("Can't Add New user " + error);
        }
    }

    async delete(id: string): Promise<UsersTable[]> {
        try {
            const sql = 'DELETE FROM users WHERE id=($1)';
            const conn = await client.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows
        } catch (error) {
            throw new Error("Can't Delete The user " + error);
        }
    }

    async authenticate(username: string, password: string): Promise<UsersTable[] | null> {
        const sql = 'SELECT password FROM users WHERE username=($1)';
        const conn = await client.connect();
        const result = await conn.query(sql, [username]);
        if( result.rows.length ) {
            const user = result.rows[0];
            const pepper = process.env.SALT_AND_PEPPER;
            if ( compareSync(password+pepper, user.password) ) {
                return result.rows
            }
        }
        return null
    }

}