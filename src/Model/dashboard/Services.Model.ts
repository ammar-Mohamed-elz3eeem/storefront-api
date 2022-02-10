import { client } from "../../database";
import { top5 } from "../../interfaces/dashboard/Services.interfaces";

export class ServicesModel {
    async top5(): Promise<top5[]> {
        try {
            const conn = await client.connect();
            const sql: string = `SELECT product_id, product_name, product_price, count(order_id)
            FROM products INNER JOIN order_products ON products.id = order_products.product_id
            GROUP BY product_id, product_name, product_price
            ORDER BY count(order_products.id) DESC
            LIMIT 5`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows
        } catch (error) {
            throw new Error("Can't Get Top 5 Products " + error)
        }
    }
}