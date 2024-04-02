import { Request, Response, Router } from "express";
import { getItem, getItems, postItem, updateItem } from "../controllers/item";
import { auth } from "../middleware/auth";

const router = Router();

router.get("/", getItems);
router.get("/:id", auth, getItem);
router.put("/:id", updateItem);
router.post("/", postItem);

export { router };
