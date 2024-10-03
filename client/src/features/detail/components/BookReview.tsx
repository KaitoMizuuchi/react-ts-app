import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface BookReviewProps {
    review: string | null | undefined;
}

const BookReview = ({ review }: BookReviewProps) => {
    return (
        <Grid size={{ xs: 12, md: 12 }}>
            <Typography variant="body1">
                {review ?? "レビューがありません"}
            </Typography>
        </Grid>
    );
};

export default BookReview;
