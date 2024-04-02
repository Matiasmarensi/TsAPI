import { Car } from "../interface/car.interface";
import itemModel from "../models/item";

const insertCar = async (item: Car) => {
  const insertItem = await itemModel.create(item);
  return insertItem;
};
const getCars = async () => {
  const cars = await itemModel.find();
  return cars;
};
//get car by id
const getCarById = async (id: string) => {
  const car = await itemModel.findOne({ _id: id });

  return car;
};

const updateCar = async (id: string, item: Car) => {
  const updateItem = await itemModel.findByIdAndUpdate({ _id: id }, item, { new: true });
  return updateItem;
};
export { insertCar, getCars, getCarById, updateCar };
