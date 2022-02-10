import { Request, Response } from "express";
import { Product } from "../interfaces/Products.Interface";
import { ProductStore } from "../Model/Products.Model";

const productObj = new ProductStore();

export const allProducts = async (_req: Request, res: Response) => {
    try {
        const prods = await productObj.index();
        res.status(200).json(prods);
    } catch (error) {
        res.status(403).json(error)
    }
}

export const showProductWithId = async (req: Request, res: Response) => {
    try {
        const prod = await productObj.show(req.params.id);
        res.status(200).json(prod);
    } catch (error) {
        res.status(403).json(error)
    }
}

export const deleteProductWithId = async (req: Request, res: Response) => {
    try {
        const deletedProd = await productObj.delete(req.params.id);
        res.status(200).json(deletedProd);
    } catch (error) {
        res.status(403).json(error);
    }
}

export const createNewProduct = async (req: Request, res: Response) => {
    const p: Product = {
        price: req.body.price,
        name: req.body.name,
        category: req.body.category
    }
    try {
        const createdProduct = await productObj.create(p)
        res.status(200).json(createdProduct);
    } catch (error) {
        res.status(403).json(error)
    }
}

export const showByCategory = async (req: Request, res: Response) => {
    const cat = req.params.category
    try {
        const prods = await productObj.showProductsByCategory(cat)
        res.status(200).json(prods);
    } catch (error) {
        res.status(403).json(error)
    }
}