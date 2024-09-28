import { fetchBookById } from "@/services/books/apiGetBookById";
import { bookProps } from "@/types";
import { useEffect, useState } from "react";

export const useGetById = (bookId: string | undefined) => {
    const [book, setBook] = useState<bookProps>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getBookById = async () => {
            try {
                const data = await fetchBookById(bookId);
                setBook(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    console.log("Unexpected error", error);
                }
            } finally {
                setLoading(false);
            }
        }

        getBookById();
    }, [])

    return { book, loading, error};

}