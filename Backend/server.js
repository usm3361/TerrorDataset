import express from "express";
import router from "./src/routes/terrors.routes.js";

const app = express();
const PORT = process.env.PORT_SERVER || 8000;

app.use(express.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
