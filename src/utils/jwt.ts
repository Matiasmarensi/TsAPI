import { sign, verify } from "jsonwebtoken";

const singToken = (id: string) => {
  const token = sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: "30d",
  });
  return token;
};

const verifyToken = (token: string) => {
  const isOk = verify(token, process.env.JWT_SECRET!) as { id: string };
  return isOk;
};

export { singToken, verifyToken };
