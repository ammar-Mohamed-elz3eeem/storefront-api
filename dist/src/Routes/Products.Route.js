"use strict";
exports.__esModule = true;
exports.productRotes = void 0;
var express_1 = require("express");
var Products_Controller_1 = require("../Controllers/Products.Controller");
var verifyUser_1 = require("../middleware/verifyUser");
// import  from "../Controllers/Products.Controller";
exports.productRotes = (0, express_1.Router)();
exports.productRotes.get("/", Products_Controller_1.allProducts);
exports.productRotes.get("/cat/:category", Products_Controller_1.showByCategory);
exports.productRotes.post("/add", verifyUser_1.verification, Products_Controller_1.createNewProduct);
exports.productRotes["delete"]("/:id", verifyUser_1.verification, Products_Controller_1.deleteProductWithId);
exports.productRotes.get("/:id", Products_Controller_1.showProductWithId);
