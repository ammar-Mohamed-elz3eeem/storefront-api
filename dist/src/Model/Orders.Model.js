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
exports.UserOrders = void 0;
var database_1 = require("../database");
var UserOrders = /** @class */ (function () {
    function UserOrders() {
    }
    UserOrders.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.client.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = 'SELECT * FROM orders';
                        return [4 /*yield*/, conn.query(sql)];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error("Can't Show all Orders");
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserOrders.prototype.create = function (o) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.client.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = 'INSERT INTO orders (status, user_id) VALUES ($1, $2) RETURNING *';
                        return [4 /*yield*/, conn.query(sql, [o.status, o.user_id])];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        throw new Error("Can't Create an order" + error_2);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserOrders.prototype.show = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.client.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = 'SELECT * FROM orders WHERE id=($1)';
                        return [4 /*yield*/, conn.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error("Can't Show the Product with the id: ".concat(id));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserOrders.prototype["delete"] = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, conn, result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        sql = 'DELETE FROM orders WHERE id=($1)';
                        return [4 /*yield*/, database_1.client.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error("Can't Delete The Order " + error_4);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Adds product to your order
     *
     * @param id: string    The id of the product you want to add to the order
     * @param quantity      The quantity you want to add to the order from this product
     */
    UserOrders.prototype.addProductToOrder = function (productId, quantity, orderId) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result, error_5, conn, sql, result, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.client.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = "SELECT * FROM orders WHERE id=($1)";
                        return [4 /*yield*/, conn.query(sql, [orderId])];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        if (result.rows[0].status == 'closed') {
                            throw new Error("Can't Add products to closed order");
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_5 = _a.sent();
                        console.log(error_5);
                        throw new Error("There are no opened Orders in your account");
                    case 4:
                        _a.trys.push([4, 7, , 8]);
                        return [4 /*yield*/, database_1.client.connect()];
                    case 5:
                        conn = _a.sent();
                        sql = 'INSERT INTO order_products (quantity, product_id, order_id) VALUES ($1, $2, $3)';
                        return [4 /*yield*/, conn.query(sql, [quantity, productId, orderId])];
                    case 6:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows];
                    case 7:
                        error_6 = _a.sent();
                        console.log(error_6);
                        throw new Error("Can't insert into order_products ".concat(error_6));
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * removes product from your order
     *
     * @param id: string    The id of the product you want to remove from the order
     */
    UserOrders.prototype.removeProductFromOrder = function (productId) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.client.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = 'DELETE FROM order_products WHERE product_id=($1)';
                        return [4 /*yield*/, conn.query(sql, [productId])];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        error_7 = _a.sent();
                        throw new Error("Can't Delete from order_products ".concat(error_7));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set the order status to closed
     */
    UserOrders.prototype.close = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, conn, result, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        sql = "UPDATE orders SET status = 'closed' WHERE id=($1) RETURNING *";
                        return [4 /*yield*/, database_1.client.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        error_8 = _a.sent();
                        throw new Error("Can't update the order with id:".concat(id, " ").concat(error_8));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * shows the last purchases that users have made
     *
     * @returns Array [{
     *      username: string,
     *      order_status: string
     * }]
     */
    UserOrders.prototype.showLastPurchases = function () {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.client.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = 'SELECT users.username, orders.status, orders.id FROM orders INNER JOIN users ON orders.user_id = users.id WHERE orders.status=($1)';
                        return [4 /*yield*/, conn.query(sql, ["closed"])];
                    case 2:
                        result = _a.sent();
                        conn.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        error_9 = _a.sent();
                        throw new Error("Can't Show all last purchases " + error_9);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UserOrders;
}());
exports.UserOrders = UserOrders;
