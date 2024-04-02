import { Router } from "express";

import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = fileName.replace(".ts", "");
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log("la ruta es " + cleanName);
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
