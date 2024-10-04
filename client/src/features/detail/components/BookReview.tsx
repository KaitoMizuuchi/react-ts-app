import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface BookReviewProps {
    review: string | null | undefined;
}

const BookReview = ({ review }: BookReviewProps) => {
    return (
        <Grid size={{ xs: 12, md: 12 }} sx={{ mt: 7 }}>
            <Typography variant="h4">感想</Typography>
            <Typography variant="body1" sx={{ border: "1px solid #999" }}>
                {review ?? "がありません"}
            </Typography>
        </Grid>
    );
};

export default BookReview;
