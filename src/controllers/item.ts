import { Request, Response } from "express";
import { hangleHelp } from "../utils/error.hangler";
import { getCarById, getCars, insertCar, updateCar } from "../services/items";

const getItem = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const item = await getCarById(id);

    return res.send(item);
  } catch (error) {
    hangleHelp(res, "ERROR_GET_ITEM");
  }
};
const getItems = async (req: Request, res: Response) => {
  try {
    const items = await getCars();
    console.log(items);
    res.send(items);
  } catch (error) {}
};
const postItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const newItem = await insertCar(body);

    res.send(newItem);
  } catch (error) {
    hangleHelp(res, "ERROR_POST_ITEM", error);
  }
};
const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    console.log(id);
    console.log(body);
    const updateItem = await updateCar(id, body);
    res.send(updateItem);
  } catch (error) {}
};

export { getItem, getItems, postItem, updateItem };
