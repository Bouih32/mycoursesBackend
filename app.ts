import express, { Request, Response } from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const port = process.env.PORT || 7856;

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
