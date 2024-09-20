import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchAllCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/categories`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch categories: ${error}`);
    }
}
