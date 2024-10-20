import BookDate from "@/features/detail/components/BookDate";
import BookDetails from "@/features/detail/components/BookDetails";
import BookInfo from "@/features/detail/components/BookInfo";
import BookReview from "@/features/detail/components/BookReview";
import EditModal from "@/features/detail/components/EditModal";
import { useGetById } from "@/features/detail/hooks/useGetById";
import { ModalOpenProps } from "@/features/detail/types/detailTypes";
import { Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { book, loading, error } = useGetById(id);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editData, setEditData] = useState<ModalOpenProps>({
        value: "",
        type: "",
    });

    const handleModalOpen = (
        value: string | number | null | undefined,
        type: string
    ) => {
        setIsModalOpen(!isModalOpen);
        setEditData({ value, type });
    };

    const handleModalClose = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            {isModalOpen && (
                <EditModal
                    handleModalClose={handleModalClose}
                    editData={editData}
                    book={book}
                    bookId={id}
                />
            )}
            <Container sx={{ mt: 5 }}>
                <Grid container spacing={2}>
                    <BookInfo
                        handleModalOpen={handleModalOpen}
                        title={book?.title}
                        author={book?.author}
                        translator={book?.translator}
                    />
                    <BookDetails
                        category={book?.category.name}
                        rating={book?.rating}
                    />
                    <BookReview
                        review={book?.review}
                        handleModalOpen={handleModalOpen}
                    />
                    <BookDate
                        startDate={book?.startDate}
                        endDate={book?.endDate}
                    />
                </Grid>
                <Button
                    sx={{ mt: 10 }}
                    variant="contained"
                    onClick={() => navigate("/")}
                >
                    戻る
                </Button>
            </Container>
        </>
    );
};

export default BookDetail;
