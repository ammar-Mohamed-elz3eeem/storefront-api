"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var port = process.env.PORT || "3000";
app_1.app.listen(port, function () { return console.log("Listening to port: ".concat(port)); });
