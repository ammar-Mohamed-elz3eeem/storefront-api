import { UsersModel } from "../Model/User.Model";
import { Request, Response } from "express";
import { UsersTable } from "../interfaces/User.Interfaces";
import jwt from "jsonwebtoken";
require("dotenv").config();

const user = new UsersModel();

export const index = async (_req: Request, res: Response) => {
    try {
        const allUsers = await user.index();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const show = async (_req: Request, res: Response) => {
    try {
        const showUser = await user.show(_req.params.id);
        res.status(200).json(showUser);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const create = async (req: Request, res: Response) => {
    const newUser: UsersTable = {
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    }
    try {
        const createUser = await user.create(newUser);
        const token = jwt.sign({newUser: createUser}, process.env.PAYLOAD_STRING as string, { expiresIn: '1800000s' })
        res.status(200).json(token);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const del = async (_req: Request, res: Response) => {
    try {
        const deletedUser = await user.delete(_req.params.id);
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const authenticate = async (_req: Request, res: Response) => {
    try {
        const authenticUser = await user.authenticate(_req.body.username, _req.body.password);
        res.status(200).json(authenticUser);
    } catch (error) {
        res.status(400).json(error);
    }
}