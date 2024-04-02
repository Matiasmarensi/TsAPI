import { Response } from "express";

const hangleHelp = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw);
  res.status(500);
  res.send({ error });
};

export { hangleHelp };
