import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { getFormatDate } from "../utils/FormatDate";

interface BookDateProps {
    startDate: Date | null | undefined;
    endDate: Date | null | undefined;
}

const BookDate = ({ startDate, endDate }: BookDateProps) => {
    return (
        <Grid size={12} sx={{ display: "flex" }}>
            <Box>
                <Typography>読書開始日</Typography>
                <Typography>
                    {startDate
                        ? getFormatDate(startDate)
                        : "読書開始日がありません"}
                </Typography>
            </Box>
            <Box sx={{ mx: 5 }}>
                <Typography>読書終了日</Typography>
                <Typography>
                    {endDate
                        ? getFormatDate(endDate)
                        : "読書終了日がありません"}
                </Typography>
            </Box>
        </Grid>
    );
};

export default BookDate;
