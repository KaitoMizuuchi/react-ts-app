import { Box, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import EditIcon from "@mui/icons-material/ModeEditOutlineTwoTone";

interface BookReviewProps {
    review: string | null | undefined;
}

const BookReview = ({ review }: BookReviewProps) => {
    return (
        <Grid size={{ xs: 12, md: 12 }} sx={{ mt: 5 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h3" sx={{ fontSize: "28px" }}>
                    レビュー
                </Typography>
                <IconButton sx={{ ml: 2 }}>
                    <EditIcon sx={{ fontSize: "20px" }} />
                </IconButton>
            </Box>
            <Typography
                variant="body1"
                sx={{
                    mt: 2,
                    height: "100px",
                    p: 1.5,
                    boxShadow: "0px 0px 10px 0px #aaa",
                }}
            >
                {review ? review : "レビューがありません"}
            </Typography>
        </Grid>
    );
};

export default BookReview;
