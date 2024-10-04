import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface BookInfoProps {
    title: string | undefined;
    author: string | undefined;
    translator: string | null | undefined;
}

const BookInfo = ({ title, author, translator }: BookInfoProps) => {
    const fontSize = "21px";
    const mb = 3;
    return (
        <Grid size={{ xs: 12, md: 6 }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    mb: mb,
                }}
            >
                <Typography sx={{ fontSize: fontSize }}>書籍：</Typography>
                <Typography variant="h3">{title}</Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    mb: mb,
                }}
            >
                <Typography sx={{ fontSize: fontSize }}>著者：</Typography>
                <Typography variant="h3">{author}</Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    mb: mb,
                }}
            >
                <Typography sx={{ fontSize: fontSize }}>翻訳家：</Typography>
                <Typography variant="h3">
                    {translator || "翻訳者なし"}
                </Typography>
            </Box>
        </Grid>
    );
};

export default BookInfo;
