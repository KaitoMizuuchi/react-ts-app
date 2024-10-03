import BookDate from "@/features/detail/components/BookDate";
import BookDetails from "@/features/detail/components/BookDetails";
import BookInfo from "@/features/detail/components/BookInfo";
import BookReview from "@/features/detail/components/BookReview";
import { useGetById } from "@/features/detail/hooks/useGetById";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useParams } from "react-router-dom";

const BookDetail = () => {
    const { id } = useParams();
    const { book, loading, error } = useGetById(id);
    console.log(book);

    return (
        <Container>
            <Grid container spacing={2}>
                <BookInfo
                    title={book?.title}
                    author={book?.author}
                    translator={book?.translator}
                />
                <BookDetails
                    category={book?.category.name}
                    rating={book?.rating}
                />
                <BookReview review={book?.review} />
                <BookDate startDate={book?.startDate} endDate={book?.endDate} />
            </Grid>
        </Container>
    );
};

export default BookDetail;
