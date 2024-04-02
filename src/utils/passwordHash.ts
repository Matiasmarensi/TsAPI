import { hash, compare } from "bcryptjs";
const encrypt = async (pass: string) => {
  const passwordHashed = await hash(pass, 10);

  return passwordHashed;
};

const verify = async (pass: string, passwordHashed: string) => {
  const correct = await compare(pass, passwordHashed);
  return correct;
};

export { encrypt, verify };
