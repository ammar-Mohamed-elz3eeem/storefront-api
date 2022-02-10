import { Router } from "express";
import * as orderControllers from "../Controllers/Orders.Controller";
import { verification } from "../middleware/verifyUser";

export const orderRoutes = Router();

orderRoutes.get("/closed", verification, orderControllers.lastPurchases);
orderRoutes.get("/", verification, orderControllers.showAllOrders);
orderRoutes.post("/", verification, orderControllers.createOrder);
orderRoutes.get("/:id", verification, orderControllers.showOrderById);
orderRoutes.delete("/:id", verification, orderControllers.deleteOrderById);
orderRoutes.post("/:id/product", verification, orderControllers.addProductToOrder);
orderRoutes.patch("/:id/close", verification, orderControllers.closeOrder);
orderRoutes.delete("/:id/product", verification, orderControllers.removeProductFromOrder);