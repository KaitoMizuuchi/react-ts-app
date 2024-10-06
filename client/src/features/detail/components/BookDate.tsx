import { Box, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { getFormatDate } from "../utils/FormatDate";
import EditIcon from "@mui/icons-material/ModeEditOutlineTwoTone";

interface BookDateProps {
    startDate: Date | null | undefined;
    endDate: Date | null | undefined;
}

const BookDate = ({ startDate, endDate }: BookDateProps) => {
    const commonTitleStyle = {
        fontSize: "18px",
    };

    const commonDateStyle = {
        fontSize: "24px",
    };
    return (
        <Grid size={12} sx={{ display: "flex", mt: 10, gap: 10 }}>
            <Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Typography variant="h3" sx={commonTitleStyle}>
                        読書開始日
                    </Typography>
                    <IconButton sx={{ ml: 2 }}>
                        <EditIcon />
                    </IconButton>
                </Box>
                <Typography sx={commonDateStyle}>
                    {startDate
                        ? getFormatDate(startDate)
                        : "読書開始日がありません"}
                </Typography>
            </Box>
            <Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Typography variant="h3" sx={commonTitleStyle}>
                        読書終了日
                    </Typography>
                    <IconButton sx={{ ml: 2 }}>
                        <EditIcon />
                    </IconButton>
                </Box>
                <Typography sx={commonDateStyle}>
                    {endDate
                        ? getFormatDate(endDate)
                        : "読書終了日がありません"}
                </Typography>
            </Box>
        </Grid>
    );
};

export default BookDate;
