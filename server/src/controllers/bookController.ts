import { Request, Response } from "express";
import { bookService } from "../services/bookService";
import { BookProps } from "../types";

// データが入力された際のバリデーション
const validateInputBookData = (data: BookProps): object | null => {
    if (!data.title || !data.author || !data.categoryId) {
        return { error: "Title, author, and categoryId are required" };
    }
    if (data.rating < 1 || data.rating > 5) {
        return { error: "Rating must be between 1 and 5" };
    }
    return null;
}

// 本全件取得
const getAllBooks = async (req: Request, res: Response) => {
    const allBooks = await bookService.getAllBooks();
    res.json(allBooks);
}

// 入力したデータを挿入
const createBook = async (req: Request, res: Response) => {
    try {
        // const { title, author, translator, review, rating, startDate, endDate, categoryId } = req.body;
        const errors = validateInputBookData(req.body);
        if (errors) {
            return res.status(400).json(errors)
        }

        // const newBook = await bookService.createBook({ title, author, translator, review, rating, startDate, endDate, categoryId });
        const newBook = await bookService.createBook({ ...req.body });
        res.json(newBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


export { getAllBooks, createBook };
