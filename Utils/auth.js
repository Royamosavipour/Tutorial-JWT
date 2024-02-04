import { hash } from "bcrypt";
import { sign } from "jsonwebtoken";

const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const generatToken = (data) => {
  const token = sign({ ...data }, process.env.privateKey, { expiresIn: "24h" });
  return token;
};

export { hashPassword, generatToken };
