import { BookFormType } from "@/validations/BookFormValidate";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const sendBookData = async (bookData: BookFormType) => {
    try {
        const response = await axios.post(`${BASE_URL}/books`, bookData);
    } catch (error) {
        throw new Error(`Failed to fetch books: ${error}`);
    }
}