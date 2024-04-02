import { Request, Response, Router } from "express";
import { getItem, getItems, postItem, updateItem } from "../controllers/item";

const router = Router();

router.get("/", getItems);
router.get("/:id", getItem);
router.put("/:id", updateItem);
router.post("/", postItem);

export { router };
