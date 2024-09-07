import { PrismaClient } from "@prisma/client";
import { BookProps } from "../types";


const prisma = new PrismaClient();

export const bookService = {
    // データベースの本全件取得
    async getAllBooks() {
        const allBooks = await prisma.books.findMany({
            include: {
                category: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        });
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
            where: { id },
            include: {
                category: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
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
    },

    // idに基づくデータの削除（物理削除）
    async deleteBookById(id: number) {
        const deleteBook = await prisma.books.delete({
            where: { id }
        })
        return deleteBook;
    }
}


