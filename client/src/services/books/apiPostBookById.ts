import { UpdateBookProps } from "@/features/detail/types/detailTypes";
import { BookFormType } from "@/validations/BookFormValidate";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const updateBook = async (bookId:string | undefined, bookData: UpdateBookProps) => {
    try {
        const response = await axios.put(`${BASE_URL}/books/${bookId}`, bookData);
    } catch (error) {
        throw new Error(`Failed to fetch books: ${error}`);
    }
}