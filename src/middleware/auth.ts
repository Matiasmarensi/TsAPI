import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";

const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const jwtHeader = req.headers.authorization;
    const jwt = jwtHeader?.split(" ")[1];
    const token = verifyToken(jwt!);
    if (!token) {
      res.status(401).json({ message: "token no valid" });
    } else {
      console.log(jwt);
      next();
    }
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
export { auth };
