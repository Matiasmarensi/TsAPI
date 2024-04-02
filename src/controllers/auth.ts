import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";

const register = async (req: Request, res: Response) => {
  const { body } = req;
  console.log(body);
  const user = await registerNewUser(body);
  res.send(user);
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await loginUser({ email, password });
  if (user === "User not found" || user === "Wrong password") {
    return res.status(403).send({ message: user });
  }
  res.send({ user, message: "Login successful" });
};

export { register, login };
