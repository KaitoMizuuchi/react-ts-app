import Grid from "@mui/material/Grid2";
import { Box, Chip, IconButton, Rating, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/ModeEditOutlineTwoTone";

interface BookDetailProps {
    category: string | undefined;
    rating: number | null | undefined;
}

const BookDetails = ({ category, rating }: BookDetailProps) => {
    const fontSize = "18px";
    return (
        <Grid
            size={{ xs: 12, md: 7 }}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                justifyContent: "end",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ fontSize: fontSize, mr: 2 }} variant="h3">
                    カテゴリー：
                </Typography>
                <Chip
                    label={category}
                    sx={{
                        width: "fit-content",
                        px: 4,
                        height: "40px",
                        background: "#ed8edd",
                        fontSize: "20px",
                        fontWeight: 700,
                        boxShadow: "0px 0px 15px 0px #aaa",
                    }}
                />
                <IconButton sx={{ ml: 2 }}>
                    <EditIcon sx={{ fontSize: "20px" }} />
                </IconButton>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ fontSize: fontSize, mr: 2 }} variant="h3">
                    評価：
                </Typography>
                <Rating name="rating" value={rating || null} readOnly />
                <IconButton sx={{ ml: 2 }}>
                    <EditIcon sx={{ fontSize: "20px" }} />
                </IconButton>
            </Box>
        </Grid>
    );
};

export default BookDetails;
