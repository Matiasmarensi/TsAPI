import { Request, Response, Router } from "express";
import { getItem, getItems, postItem, updateItem } from "../controllers/item";
import { auth } from "../middleware/auth";

const router = Router();

router.get("/", getItems);
router.get("/:id", auth, getItem);
router.put("/:id", auth, updateItem);
router.post("/", auth, postItem);

export { router };
