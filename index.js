import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import AkunRouter from "./routes/AkunRouter.js";
import MenuRouter from "./routes/MenuRouter.js";
import PesananRouter from "./routes/PesananRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(AkunRouter);
app.use(MenuRouter);
app.use(PesananRouter);

app.listen(5000, () => console.log('Server Up and Running...'));