import Grid from "@mui/material/Grid2";
import { Chip, Rating } from "@mui/material";

interface BookDetailProps {
    category: string | undefined;
    rating: number | null | undefined;
}

const BookDetails = ({ category, rating }: BookDetailProps) => {
    return (
        <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
                border: "1px solid red",
                display: "flex",
                flexDirection: "column",
                gap: 2,
            }}
        >
            <Chip label={category} sx={{ width: "fit-content", px: 2 }} />
            <Rating name="rating" value={rating || null} readOnly />
        </Grid>
    );
};

export default BookDetails;
