import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
require("dotenv").config();

export async function verification(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authorizationHeader: string = req.headers["authorization"]!;
    const token = authorizationHeader.split(" ")[1];
    if (!token) res.status(403).end("Forbidden");
    jwt.verify(token, process.env.PAYLOAD_STRING!);
    next();
  } catch (error) {
    res.status(403).end("Forbidden");
  }
}