import { Request, Response } from "express";
import { categoryService } from "../services/categoryService";




// 本全件取得
const getAllCategories = async (req: Request, res: Response) => {
    try {
        const allCategories = await categoryService.getAllCategories();
        res.json(allCategories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


export { getAllCategories };
