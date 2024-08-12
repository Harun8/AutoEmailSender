import express, { Response, Request } from "express";
import { hashPassword, signToken } from "../middleware/authMiddleware";
import * as schema from "../db/schema";
import { eq, lt, gte, ne } from "drizzle-orm";

import { drizzle } from "drizzle-orm/node-postgres";
import { client } from "../db/db";

type credentials = {
  email: string;
  password: string;
  username: string;
};
const db = drizzle(client, { schema });
export const login = async (req: Request, res: Response) => {};

export const signup = async (req: Request, res: Response) => {
  let credentials: credentials = req.body.values;
  console.log(req.body.values);
  let { email, password, username } = credentials;
  console.log("email and password", email, password);

  // check if user already exist return early if not

  let userExist = await db
    .select()
    .from(schema.users)
    .where(eq(schema.users.email, email));

  console.log("does user exist", userExist);

  if (userExist.length > 0)
    return res.status(404).json({ err: "User already exist, log in instead" });

  // hash password
  let hashedPassword: string | undefined = await hashPassword(password);

  // save user in db, and return user object
  try {
    const user = await db
      .insert(schema.users)
      .values({ userName: username, email: email, password: hashedPassword })
      .returning();
    console.log("User inserted:", user);
    let jwtToken = await signToken(user);
    return res.status(200).json({ jwtToken });
  } catch (error) {
    return res.status(404).json({ err: "Error saving user" });
    console.error("Error inserting user:", error);
  }
  // sign the token with the user object, aka email, id, hashedpassword
};
