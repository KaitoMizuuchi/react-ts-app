import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const deleteBook = async (bookId: number) => {
    try {
        await axios.delete(`${BASE_URL}/books/${bookId}`);
    } catch (error) {
        throw new Error(`Failed to fetch books: ${error}`);
    }
}
