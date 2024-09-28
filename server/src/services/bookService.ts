import { PrismaClient } from "@prisma/client";
import { BookProps } from "../types";


const prisma = new PrismaClient();

export const bookService = {
    // データベースの本全件取得
    async getAllBooks() {
        const allBooks = await prisma.books.findMany({
            where: {
                deletedAt: null
            },
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
            where: {
                id,
                deletedAt: {
                    not: null,
                },
            },
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

    // idに基づくデータの削除（論理削除）
    async deleteBookById(id: number) {
        const deleteBook = await prisma.books.update({
            where: { id },
            data: {
                deletedAt: new Date(),
            }
        })
        return deleteBook;
    },

    // データの復元
    async restoreBookById(id: number) {
        const restoreBook = await prisma.books.update({
            where: {
                id
            },
            data: {
                deletedAt: null
            }
        })
        return restoreBook;
    }
}


