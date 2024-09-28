import { fetchAllCategories } from "@/services/categories/apiGetAllCategories";
import { categoryProps } from "@/types";
import { useEffect, useState } from "react";


export const useAllCategories = () => {
    const [categories, setCategories] = useState<categoryProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getAllCategories = async () => {
            try {
                const data = await fetchAllCategories();
                setCategories(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    console.log("Unexpected error", error);
                }
            } finally {
                setLoading(false);
            }
        };

        getAllCategories();
    }, [])


    return { categories, loading, error };
}
