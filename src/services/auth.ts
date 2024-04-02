import { compare } from "bcryptjs";
import { Auth } from "../interface/auth.interface";
import UserModel from "../models/user";
import { encrypt, verify } from "../utils/passwordHash";

const registerNewUser = async (authUser: Auth) => {
  const { email, password } = authUser;

  if (email === "" || password === "") {
    throw new Error("All fields must be completed");
  }
  const isUser = await UserModel.findOne({ email });
  if (isUser) return "User already exists";

  const passwordHashed = await encrypt(password);
  const newUser = await UserModel.create({ ...authUser, password: passwordHashed });
  return newUser;
};

const loginUser = async ({ email, password }: Auth) => {
  console.log(email, password);
  const user = await UserModel.findOne({ email });
  if (!user) return "User not found";

  const correctPassword = await verify(password, user.password);

  if (!correctPassword) return "Wrong password";

  return user;

  // const token = jwt.sign({ id: user._id }
};

export { registerNewUser, loginUser };
