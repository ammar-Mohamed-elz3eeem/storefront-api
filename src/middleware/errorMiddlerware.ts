import {Request, Response, NextFunction} from "express";

export const errorMiddlerware = (err: Error, req:Request, res:Response, next: NextFunction) => {
    console.log("There is an eror");
    res.status(404).render("error_404");
}