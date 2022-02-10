import { UserOrders } from "../Model/Orders.Model"
import { Request, Response } from "express";
import { Orders } from "../interfaces/Orders.Interface";

const orderModel = new UserOrders();

export const showAllOrders = async (req: Request, res: Response) => {
    try {
        const allProducts = await orderModel.index();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(403).json(error);
    }
}

export const showOrderById = async (req: Request, res: Response) => {
    try {
        const product = await orderModel.show(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(403).json(error);
    }
}

export const deleteOrderById = async (req: Request, res: Response) => {
    try {
        const product = await orderModel.delete(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(403).json(error);
    }
}

export const createOrder = async (req: Request, res: Response) => {
    try {
        const orderInfo: Orders = {
            status: req.body.order_status,
            user_id: req.body.user_id
        }
        const product = await orderModel.create(orderInfo);
        res.status(200).json(product);
    } catch (error) {
        res.status(403).json(error);
    }
}

export const addProductToOrder = async (req: Request, res: Response) => {
    try {
        const productId: string = req.body.product_id;
        const orderId: string = req.params.id;
        const quantity: string = req.body.quantity;
        const product = await orderModel.addProductToOrder(productId, quantity, orderId);
        res.status(200).json(product);
    } catch (error) {
        res.status(403).json(error)
    }
}

export const removeProductFromOrder = async (req: Request, res: Response) => {
    try {
        const productId: string = req.body.product_id;
        const product = await orderModel.removeProductFromOrder(productId);
        res.status(200).json(product);
    } catch (error) {
        res.status(403).json(error)
    }
}

export const closeOrder = async (req: Request, res: Response) => {
    try {
        const closedOrder = await orderModel.close(req.params.id);
        res.status(200).json(closedOrder)
    } catch (error) {
        res.status(403).json(error)
    }
}

export const lastPurchases = async (req: Request, res: Response) => {
    try {
        const lastOrders = await orderModel.showLastPurchases();
        res.status(200).json(lastOrders);
    } catch (error) {
        res.status(403).json(error)
    }
}