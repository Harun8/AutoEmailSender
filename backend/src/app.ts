import { drizzle } from "drizzle-orm/node-postgres";
import sgMail from "@sendgrid/mail";
import { client } from "./db/db";
import express, { Request, Response } from "express";
const app = express();
import { migrate } from "drizzle-orm/node-postgres/migrator";
const port: number = 3000;

// sgMail.setApiKey(); // put api key here

app.listen(port, () => {
  console.log("Server is running on portttt ", port);
});

const dbConnection = async () => {
  try {
    await client.connect();
    console.log("db connected");

    const db = drizzle(client);
    await migrate(db, { migrationsFolder: "../backend/drizzle" });
  } catch (error) {
    console.error("Database connection or migration failed:", error);
  } finally {
    await client.end(); // Ensure the client is properly closed
  }
};

// Ensure dbConnection is called once and only after the server is running
dbConnection().catch(console.error);
