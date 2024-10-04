import Grid from "@mui/material/Grid2";
import { Box, Chip, Rating, Typography } from "@mui/material";

interface BookDetailProps {
    category: string | undefined;
    rating: number | null | undefined;
}

const BookDetails = ({ category, rating }: BookDetailProps) => {
    const fontSize = "20px";
    return (
        <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
            }}
        >
            <Box sx={{ display: "flex", mb: 5 }}>
                <Typography sx={{ fontSize: fontSize }}>
                    カテゴリー：
                </Typography>
                <Chip label={category} sx={{ width: "fit-content", px: 2 }} />
            </Box>
            <Box sx={{ display: "flex" }}>
                <Typography sx={{ fontSize: fontSize }}>評価：</Typography>
                <Rating name="rating" value={rating || null} readOnly />
            </Box>
        </Grid>
    );
};

export default BookDetails;
