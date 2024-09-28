import { useGetById } from "@/features/detail/hooks/useGetById";
import React from "react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
    const { id } = useParams();
    const { book, loading, error } = useGetById(id);
    console.log(book);
    return <div>本詳細ページ</div>;
};

export default BookDetail;
