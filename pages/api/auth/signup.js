import UserModel from "@/models/User";
import connectToDB from "@/configes/db";
import { hashPassword, generatToken } from "@/Utils/auth";
import { serialize } from "cookie";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return false;
  }

  try {
    connectToDB();
    const { firstname, lastname, Username, email, password } = req.body;
    // ========================> validation
    if (
      !firstname.trim() ||
      !lastname.trim() ||
      !Username.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      return res.status(422).json({ message: "Data is not valid" });
    }
    // ================>  make isUserExist
    const isUserExist = await UserModel.findOne({
      $or: [{ Username }, { email }],
    });
    if (isUserExist) {
      return res
        .status(422)
        .json({ message: "firstname or email already exist !!" });
    }
    // =======================> make hash password

    const hashedPasword = await hashPassword(password);
      const token = generatToken({ email });
      const users=await UserModel.find({})

    // ===========================>  make usermodel
    await UserModel.create({
      firstname,
      lastname,
      Username,
      email,
      password: hashedPasword,
      role: users.length >0 ? "USER":"ADMIN"
    });
    return res
      .setHeader(
        "Set-Cookie",
        serialize("token", token, {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 7, // 1 week
        })
      )
      .status(201)
      .json({ message: "user create with successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Unkown Internal server !!" });
  }
};

export default handler;
