import { Router } from "express";
import { allProducts, createNewProduct, deleteProductWithId, showByCategory, showProductWithId } from "../Controllers/Products.Controller";
import { verification } from "../middleware/verifyUser";
// import  from "../Controllers/Products.Controller";

export const productRotes = Router();

productRotes.get("/", allProducts);
productRotes.get("/:category", showByCategory);
productRotes.post("/add", verification, createNewProduct);
productRotes.delete("/:id", verification, deleteProductWithId);
productRotes.get("/:id", showProductWithId);