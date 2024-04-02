import { NextFunction, Request, Response } from "express";

const auth = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  console.log(header);
  next();
};
export { auth };
