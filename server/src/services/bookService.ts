import { PrismaClient } from "@prisma/client";
import { BookProps } from "../types";


const prisma = new PrismaClient();

export const bookService = {
    // データベースの本全件取得
    async getAllBooks() {
        const allBooks = await prisma.books.findMany();
        return allBooks;
    },

    // データベースに本追加
    async createBook(book: BookProps) {
        const createBook = await prisma.books.create({
            data: book,
        })
        return createBook;
    },

    // idによる本情報の取得
    async getBookById(id: number) {
        const bookById = await prisma.books.findUnique({
            where: { id }
        });
        return bookById;
    },

    // idに基づくデータの更新
    async updateBookById(id: number, book: BookProps) {
        const updatedBook = await prisma.books.update({
            where: { id },
            data: book
        });

        return updatedBook;
    }
}


