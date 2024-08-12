import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();
export const signToken = async (payload: object) => {
  let token: string = jwt.sign(
    {
      data: payload,
    },
    process.env.SECRET_KEY as string,
    { expiresIn: "24h" }
  );

  return token;
};

export const verifyToken = (token: string) => {
  let secretKey = process.env.SECRET_KEY;
  if (!secretKey) {
    throw new Error("No secret key");
  }
  let decode = jwt.verify(token, secretKey);

  return decode;
};

export const hashPassword = async (plainPassword: string) => {
  let saltRounds: number = 10;
  try {
    let hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

    return hashedPassword;
  } catch (error) {
    console.log("error", error);
  }
};
