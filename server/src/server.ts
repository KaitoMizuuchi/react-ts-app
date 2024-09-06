import express from "express";
import { PrismaClient } from "@prisma/client";
import bookRouter from "./routes/books";

const app = express();
const PORT = 3000;

const prisma = new PrismaClient();
app.use(express.json());

app.use("/books", bookRouter);

// 特定の本を取得
// app.get("/books/id",)

// 特定の本の更新
// app.put("books/:id", )

// 特定の本の削除
// app.delete("/books/:id")



// サーバーの起動
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
