import express, { Request, Response } from "express";

const app = express();

const port: number = 3000;

app.listen(port, () => {
  console.log("Server is running on port ", port);
});
