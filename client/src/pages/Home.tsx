import { useAllBooks } from "@/features/bookForm/hooks/useAllBooks";
import React from "react";

const Home = () => {
    const { books, loading, error } = useAllBooks();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {books.length !== 0
                ? books.map((item) => <li key={item.id}>{item.title}</li>)
                : null}
        </ul>
    );
};

export default Home;
