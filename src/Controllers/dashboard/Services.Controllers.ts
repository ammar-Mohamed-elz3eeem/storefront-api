import { ServicesModel } from "../../Model/dashboard/Services.Model";
import { Request, Response } from "express";

const services = new ServicesModel();

export const top5Products = async (req: Request, res: Response) => {
    try {
        const top5 = await services.top5();
        res.status(200).json(top5)
    } catch (error) {
        console.log(error);
        res.status(403).json(error)
    }
}