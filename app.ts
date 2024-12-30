import express, { Request, Response } from "express";
import dotenv from "dotenv";
import prisma from "./utils/prisma";
const app = express();
dotenv.config();
const port = process.env.PORT || 7856;

app.use(express.json());
app.post("/", async (req: Request, res: Response) => {
  try {
    await prisma.user.create({
      data: {
        email: "othmane@gmail.com",
        userName: "AMLO",
        firstName: "othmane",
        lastName: "bouih",
        password: "aaaaa",
        role: "bigboss",
      },
    });
    res.status(200).send({ message: "wach nta wa7d lafan" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "aw aw aw ach tatrowen" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
