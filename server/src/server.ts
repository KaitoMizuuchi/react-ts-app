import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bookRouter from "./routes/books";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors({
    origin: process.env.REACT_APP_FRONTEND_URL,
    credentials: true,
}))

app.use(express.json());

app.use("/books", bookRouter);

// サーバーの起動
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
