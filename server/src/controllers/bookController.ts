import { Request, Response } from "express";
import { bookService } from "../services/bookService";
import { BookProps } from "../types";

// データが入力された際のバリデーション
const validateInputBookData = (data: BookProps): object | null => {
    if (!data.title || !data.author || !data.rating || !data.categoryId) {
        return { error: "Title, author, rating, and categoryId are required" };
    }
    if (data.rating < 1 || data.rating > 5) {
        return { error: "Rating must be between 1 and 5" };
    }
    return null;
}

// 本全件取得
const getAllBooks = async (req: Request, res: Response) => {
    try {
        const allBooks = await bookService.getAllBooks();
        res.json(allBooks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// 入力したデータを挿入
const createBook = async (req: Request, res: Response) => {
    try {
        const errors = validateInputBookData(req.body);
        if (errors) {
            return res.status(400).json(errors)
        }

        const newBook = await bookService.createBook({ ...req.body });
        res.json(newBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// idで選択されたbook情報を取得
const getBookById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const bookById = await bookService.getBookById(Number(id));
        if (!bookById) {
            return res.status(404).json({ message: `Book with ID ${id} not found` })
        }

        res.json(bookById);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


export { getAllBooks, createBook, getBookById };
