import { useAllBooks } from "@/hooks/useAllBooks"
import { bookListProps } from "@/types";
import { useEffect, useState } from "react";

/*
    データベースから読書リストのデータを整形
*/
export const useBookList = (): {
    bookList: bookListProps[];
    loading: boolean;
    error: string | null;
} => {
    const { books, loading, error } = useAllBooks();
    const [bookList, setBookList] = useState<bookListProps[]>([]);

    useEffect(() => {
        if (books && books.length > 0) {
            const formattedBooks = books.map((item) => ({
                id: item.id,
                title: item.title,
                author: item.author,
                category: item.category.name,
                rating: item.rating ?? null,
            }))
            setBookList(formattedBooks);
        }
    }, [books])

    return { bookList, loading, error }
}
