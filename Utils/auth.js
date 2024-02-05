import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const generatToken = (data) => {
  const token = sign({ ...data }, process.env.privateKey, { expiresIn: "24h" });
  return token;
};

const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

const verifyToken = (token) => {
  try {
    const validationResult = verify(token, process.env.privateKey);
    return validationResult;
  } catch (err) {
    console.log("Verify Token Error =>", err);
    return false;
  }
};

export { hashPassword, generatToken, verifyPassword, verifyToken };
