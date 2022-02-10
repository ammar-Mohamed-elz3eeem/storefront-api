"use strict";
exports.__esModule = true;
exports.servicesRouter = void 0;
var express_1 = require("express");
var Services_Controllers_1 = require("../../Controllers/dashboard/Services.Controllers");
var verifyUser_1 = require("../../middleware/verifyUser");
exports.servicesRouter = (0, express_1.Router)();
exports.servicesRouter.get("/", verifyUser_1.verification, Services_Controllers_1.top5Products);
