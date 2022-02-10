import { client } from "../database";
import { Product } from "../interfaces/Products.Interface";

export class ProductStore {
    async index(): Promise<Product[]> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM products';
            const result = await conn.query(sql);
            conn.release();
            return result.rows
        } catch (error) {
            throw new Error("Can't show all product " + error)
        }
    };
    async show(id: string): Promise<Product[]> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM products WHERE id=($1)';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows
        } catch (error) {
            throw new Error("Can't show the product " + error)
        }
    };
    async create(p: Product): Promise<Product> {
        try {
            const conn = await client.connect();
            const sql = 'INSERT INTO products (product_name, product_price, product_category) VALUES ($1, $2, $3) RETURNING *';
            const result = await conn.query(sql, [p.name, p.price, p.category]);
            conn.release();
            return result.rows[0]
        } catch (error) {
            throw new Error("Can't create the product " + error)
        }
    };
    async delete(id: string): Promise<Product[]> {
        try {
            const conn = await client.connect();
            const sql = 'DELETE FROM products WHERE id=($1)';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows
        } catch (error) {
            throw new Error("Can't delete the product " + error)
        }
    };
    async showProductsByCategory(category:string): Promise<Product[]> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM products WHERE product_category=($1)';
            const result = await conn.query(sql, [category]);
            conn.release();
            return result.rows
        } catch (error) {
            throw new Error("Can't Find products with category " + category)
        }
    }
}