import express, { Response, Request } from "express";
import { hashPassword } from "../middleware/authMiddleware";
import * as schema from "../db/schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { client } from "../db/db";

type credentials = {
  email: string;
  password: string;
};
const db = drizzle(client, { schema });
export const login = async (req: Request, res: Response) => {};

export const signup = async (req: Request, res: Response) => {
  console.log("signup called", req.body);

  let credentials: credentials = req.body;

  let { email, password } = credentials;

  // hash password
  let hashedPassword: string = await hashPassword(password);

  console.log("hashsed password", hashedPassword);
  // save user in db
  const user = await db.insert(users).values(credentials);
  // sign the token with the user object, aka email, id, hashedpassword

  return res.json({ msg: "yo" });
};
