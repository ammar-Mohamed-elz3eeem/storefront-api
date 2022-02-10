"use strict";
exports.__esModule = true;
exports.errorMiddlerware = void 0;
var errorMiddlerware = function (err, req, res, next) {
    console.log("There is an eror");
    res.status(404).render("error_404");
};
exports.errorMiddlerware = errorMiddlerware;
