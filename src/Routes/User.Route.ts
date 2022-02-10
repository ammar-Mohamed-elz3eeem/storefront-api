import {index, create, del, show} from "./../Controllers/User.Controller";
import { Router } from "express";
import { verification } from "../middleware/verifyUser";

export const userRoutes: Router = Router();

userRoutes.get("/", verification, index);
userRoutes.post("/", create);
userRoutes.get("/:id", verification, show);
userRoutes.delete("/:id", verification, del);