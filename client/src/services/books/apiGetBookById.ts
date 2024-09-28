import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;


export const fetchBookById = async (bookId: string | undefined) => {
    try {
        const response = await axios.get(`${BASE_URL}/books/${bookId}`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch books: ${error}`);
    }
}
