"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.lastPurchases = exports.closeOrder = exports.removeProductFromOrder = exports.addProductToOrder = exports.createOrder = exports.deleteOrderById = exports.showOrderById = exports.showAllOrders = void 0;
var Orders_Model_1 = require("../Model/Orders.Model");
var orderModel = new Orders_Model_1.UserOrders();
var showAllOrders = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allProducts, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, orderModel.index()];
            case 1:
                allProducts = _a.sent();
                res.status(200).json(allProducts);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(403).json(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.showAllOrders = showAllOrders;
var showOrderById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, orderModel.show(req.params.id)];
            case 1:
                product = _a.sent();
                res.status(200).json(product);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(403).json(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.showOrderById = showOrderById;
var deleteOrderById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, orderModel["delete"](req.params.id)];
            case 1:
                product = _a.sent();
                res.status(200).json(product);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(403).json(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteOrderById = deleteOrderById;
var createOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orderInfo, product, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                orderInfo = {
                    status: req.body.order_status,
                    user_id: req.body.user_id
                };
                return [4 /*yield*/, orderModel.create(orderInfo)];
            case 1:
                product = _a.sent();
                res.status(200).json(product);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                res.status(403).json(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createOrder = createOrder;
var addProductToOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productId, orderId, quantity, product, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                productId = req.body.product_id;
                orderId = req.params.id;
                quantity = req.body.quantity;
                return [4 /*yield*/, orderModel.addProductToOrder(productId, quantity, orderId)];
            case 1:
                product = _a.sent();
                res.status(200).json(product);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                res.status(403).json(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addProductToOrder = addProductToOrder;
var removeProductFromOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productId, product, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                productId = req.body.product_id;
                return [4 /*yield*/, orderModel.removeProductFromOrder(productId)];
            case 1:
                product = _a.sent();
                res.status(200).json(product);
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                res.status(403).json(error_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.removeProductFromOrder = removeProductFromOrder;
var closeOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var closedOrder, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, orderModel.close(req.params.id)];
            case 1:
                closedOrder = _a.sent();
                res.status(200).json(closedOrder);
                return [3 /*break*/, 3];
            case 2:
                error_7 = _a.sent();
                res.status(403).json(error_7);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.closeOrder = closeOrder;
var lastPurchases = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var lastOrders, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, orderModel.showLastPurchases()];
            case 1:
                lastOrders = _a.sent();
                res.status(200).json(lastOrders);
                return [3 /*break*/, 3];
            case 2:
                error_8 = _a.sent();
                res.status(403).json(error_8);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.lastPurchases = lastPurchases;
