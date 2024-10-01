import { useGetById } from "@/features/detail/hooks/useGetById";
import { Chip, Container, Rating, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
    const { id } = useParams();
    const { book, loading, error } = useGetById(id);
    console.log(book);
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid
                    size={{ xs: 12, md: 6 }}
                    sx={{ border: "1px solid black" }}
                >
                    <Typography variant="h2">{book?.title}</Typography>
                    <Typography variant="h3">{book?.author}</Typography>
                    <Typography variant="h3">
                        {book?.translator !== "" ? book?.translator : null}
                    </Typography>
                </Grid>
                <Grid
                    size={{ xs: 12, md: 6 }}
                    sx={{
                        border: "1px solid red",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    <Chip label={book?.category.name} />
                    <Rating name="rating" value={book?.rating} readOnly />
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                    <Typography variant="body1">
                        {book?.review !== ""
                            ? book?.review
                            : "レビューがありません"}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BookDetail;
