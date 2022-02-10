import { Router } from "express";
import { top5Products } from "../../Controllers/dashboard/Services.Controllers";
import { verification } from "../../middleware/verifyUser";

export const servicesRouter = Router();

servicesRouter.get("/", verification, top5Products)