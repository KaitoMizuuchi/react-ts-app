import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchAllBooks = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch books: ${error}`);
    }
}
