import express from "express";
import type { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("home page 111");
});

app.listen(3000, () => {
  console.log(`server started at port 3000 yess`);
});
