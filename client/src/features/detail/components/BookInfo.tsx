import { Box, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import EditIcon from "@mui/icons-material/ModeEditOutlineTwoTone";

interface BookInfoProps {
    title: string | undefined;
    author: string | undefined;
    translator: string | null | undefined;
    handleModalOpen: (
        value: string | number | null | undefined,
        type: string
    ) => void;
}

const BookInfo = ({
    title,
    author,
    translator,
    handleModalOpen,
}: BookInfoProps) => {
    const fontSize = "21px";
    return (
        <Grid size={{ xs: 12, md: 5 }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    mb: 5,
                }}
            >
                <Typography
                    variant="h2"
                    sx={{ fontSize: "42px", fontWeight: "bold" }}
                >
                    {title}
                </Typography>
                <IconButton
                    sx={{ ml: 2 }}
                    onClick={() => handleModalOpen(title, "title")}
                >
                    <EditIcon sx={{ fontSize: "20px" }} />
                </IconButton>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    mb: 3,
                }}
            >
                <Typography sx={{ fontSize: fontSize }}>著者：</Typography>
                <Typography variant="h3" sx={{ fontSize: "28px" }}>
                    {author}
                </Typography>
                <IconButton
                    sx={{ ml: 2 }}
                    onClick={() => handleModalOpen(author, "author")}
                >
                    <EditIcon sx={{ fontSize: "20px" }} />
                </IconButton>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "flex-end",
                }}
            >
                <Typography sx={{ fontSize: fontSize }}>翻訳家：</Typography>
                <Typography variant="h4" sx={{ fontSize: "28px" }}>
                    {translator || "翻訳者なし"}
                </Typography>
                <IconButton
                    sx={{ ml: 2 }}
                    onClick={() => handleModalOpen(translator, "translator")}
                >
                    <EditIcon sx={{ fontSize: "20px" }} />
                </IconButton>
            </Box>
        </Grid>
    );
};

export default BookInfo;
