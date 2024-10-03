import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface BookInfoProps {
    title: string | undefined;
    author: string | undefined;
    translator: string | null | undefined;
}

const BookInfo = ({ title, author, translator }: BookInfoProps) => {
    return (
        <Grid size={{ xs: 12, md: 6 }} sx={{ border: "1px solid black" }}>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h3">{author}</Typography>
            <Typography variant="h4">{translator || "翻訳者なし"}</Typography>
        </Grid>
    );
};

export default BookInfo;
