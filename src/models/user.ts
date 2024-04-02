import { Schema, model, Model } from "mongoose";
import { User } from "../interface/user.interface";

const UserSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    description: { type: String, default: "descripcion no completada" },
  },

  {
    timestamps: true,
  }
);

const UserModel: Model<User> = model("user", UserSchema);

export default UserModel;
