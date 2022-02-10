"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.orderRoutes = void 0;
var express_1 = require("express");
var orderControllers = __importStar(require("../Controllers/Orders.Controller"));
var verifyUser_1 = require("../middleware/verifyUser");
exports.orderRoutes = (0, express_1.Router)();
exports.orderRoutes.get("/closed", verifyUser_1.verification, orderControllers.lastPurchases);
exports.orderRoutes.get("/", verifyUser_1.verification, orderControllers.showAllOrders);
exports.orderRoutes.post("/", verifyUser_1.verification, orderControllers.createOrder);
exports.orderRoutes.get("/:id", verifyUser_1.verification, orderControllers.showOrderById);
exports.orderRoutes["delete"]("/:id", verifyUser_1.verification, orderControllers.deleteOrderById);
exports.orderRoutes.post("/:id/product", verifyUser_1.verification, orderControllers.addProductToOrder);
exports.orderRoutes.patch("/:id/close", verifyUser_1.verification, orderControllers.closeOrder);
exports.orderRoutes["delete"]("/:id/product", verifyUser_1.verification, orderControllers.removeProductFromOrder);
