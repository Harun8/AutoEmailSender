import express, { Response, Request } from "express";
import {
  hashPassword,
  signToken,
  verifyPassword,
  verifyToken,
} from "../middleware/authMiddleware";
import * as schema from "../db/schema";
import { eq, lt, gte, ne } from "drizzle-orm";

import { drizzle } from "drizzle-orm/node-postgres";
import { client } from "../db/db";
import { JwtPayload } from "jsonwebtoken";

type credentials = {
  email: string;
  password: string;
  username: string;
};
const db = drizzle(client, { schema });

export const login = async (req: Request, res: Response) => {
  let { email, password } = req.body.values;

  let users = await db
    .select()
    .from(schema.users)
    .where(eq(schema.users.email, email));

  // no user return early
  if (users.length === 0) {
    return res.status(404).json({ err: "Invalid user logins" });
  }

  // access the first user
  let user = users[0];

  // Ensure the provided password is not null
  if (!user.password) {
    return res.status(400).json({ err: "Password is required" });
  }

  let isPasswordValid = await verifyPassword(password, user.password);

  if (isPasswordValid) {
    return res.status(200).json({ err: "Welcome back" });
  }
  return res.status(404).json({ err: "Invalid user logins" });
};

export const signup = async (req: Request, res: Response) => {
  let credentials: credentials = req.body.values;
  let { email, password, username } = credentials;

  // check if user already exist return early if not

  let userExist = await db
    .select()
    .from(schema.users)
    .where(eq(schema.users.email, email));

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
    let jwtToken = await signToken(user);

    res.cookie("jwt", jwtToken, {
      httpOnly: true, // Prevents JavaScript access to the cookie
      secure: process.env.NODE_ENV === "production", // Use Secure in production (HTTPS only)
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Allows cross-origin in production, lax otherwise
    });
    return res.status(200).json({ jwtToken });
  } catch (error) {
    return res.status(404).json({ err: "Error saving user" });
    console.error("Error inserting user:", error);
  }
  // sign the token with the user object, aka email, id, hashedpassword
};

export const getUser = async (req: Request, res: Response) => {
  let jwtToken = req.headers.cookie?.substring(4, req.headers.cookie.length);

  if (!jwtToken) {
    return res.status(404).json({ err: "Invalid user" });
  }

  let token: string | JwtPayload = verifyToken(jwtToken);

  let username: string = token?.data[0].userName;

  return res.status(200).json({ username });
};
