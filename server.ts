import express from "express";
import { resolve } from "path";

const app = express();

app.use("/", express.static(resolve(__dirname, "./dist")));

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on ${process.env.PORT || 3000}`);
  }
});
