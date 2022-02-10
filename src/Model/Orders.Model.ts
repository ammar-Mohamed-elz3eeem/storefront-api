import { client } from "../database";
import { Orders, lastPurchases } from "../interfaces/Orders.Interface";

export class UserOrders {

    async index(): Promise<Orders[]> {

        try {

            const conn = await client.connect();
            const sql = 'SELECT * FROM orders';
            const result = await conn.query(sql);
            conn.release();
            return result.rows

        } catch (error) {

            throw new Error("Can't Show all Orders");
        
        }

    }

    async create(o: Orders): Promise<Orders[]> {

        try {
            
            const conn = await client.connect();
            const sql = 'INSERT INTO orders (status, user_id) VALUES ($1, $2) RETURNING *';
            const result = await conn.query(sql, [o.status, o.user_id]);
            conn.release();
            return result.rows

        } catch (error) {
            console.log(error);
            throw new Error("Can't Create an order" + error);

        }

    }

    async show(id: string): Promise<Orders[]> {

        try {
            
            const conn = await client.connect();
            const sql = 'SELECT * FROM orders WHERE id=($1)';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows;

        } catch (error) {
            
            throw new Error(`Can't Show the Product with the id: ${id}`);

        }

    }

    async delete(id: string): Promise<Orders[]> {

        try {

            const sql = 'DELETE FROM orders WHERE id=($1)';
            const conn = await client.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows

        } catch (error) {

            throw new Error("Can't Delete The Order " + error);
        
        }
    }

    /**
     * Adds product to your order
     * 
     * @param id: string    The id of the product you want to add to the order
     * @param quantity      The quantity you want to add to the order from this product
     */
    async addProductToOrder(productId: string, quantity: string, orderId: string): Promise<Orders[]> {
        try {
            const conn = await client.connect();
            const sql = "SELECT * FROM orders WHERE id=($1)";
            const result = await conn.query(sql, [orderId]);
            conn.release();
            if (result.rows[0].status == 'closed') {
                throw new Error("Can't Add products to closed order")
            }
        } catch (error) {
            console.log(error);
            throw new Error("There are no opened Orders in your account")
        }
        try {   
            const conn = await client.connect();
            const sql = 'INSERT INTO order_products (quantity, product_id, order_id) VALUES ($1, $2, $3)';
            const result = await conn.query(sql, [quantity, productId, orderId])
            conn.release();
            return result.rows
        } catch (error) {
            console.log(error);
            throw new Error(`Can't insert into order_products ${error}`)
        }
    }

    /**
     * removes product from your order
     * 
     * @param id: string    The id of the product you want to remove from the order
     */
     async removeProductFromOrder(productId: string): Promise<Orders[]> {
        
        try {
            
            const conn = await client.connect();
            const sql = 'DELETE FROM order_products WHERE product_id=($1)';
            const result = await conn.query(sql, [productId])
            conn.release();
            return result.rows

        } catch (error) {

            throw new Error(`Can't Delete from order_products ${error}`)
        
        }

    }

    /**
     * Set the order status to closed 
     */
    async close(id: string): Promise<Orders[]> {

        try {
            
            const sql = "UPDATE orders SET status = 'closed' WHERE id=($1) RETURNING *";
            const conn = await client.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows

        } catch (error) {
            
            throw new Error(`Can't update the order with id:${id} ${error}`);

        }

    }

    /**
     * shows the last purchases that users have made
     * 
     * @returns Array [{
     *      username: string,
     *      order_status: string
     * }]
     */
    async showLastPurchases(): Promise<lastPurchases[]> {

        try {
        
            const conn = await client.connect();
            const sql = 'SELECT users.username, orders.status, orders.id FROM orders INNER JOIN users ON orders.user_id = users.id WHERE orders.status=($1)';
            const result = await conn.query(sql, ["closed"]);
            conn.release();
            return result.rows
        
        } catch (error) {

            throw new Error("Can't Show all last purchases " + error);

        }

    }

}