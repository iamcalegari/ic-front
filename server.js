import express from "express";
import { resolve } from "path";

const app = express();

app.use(Express.static(resolve(__dirname, "public")));

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on ${process.env.PORT || 3000}`);
  }
});
