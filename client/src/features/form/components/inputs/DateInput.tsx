import { Box, Chip, Typography } from "@mui/material";
import { commonTextStyle, requiredBatchStyle } from "../formStyles";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { ja } from "date-fns/locale/ja";

interface DateInputProps {
    formTitle: string;
    isChip?: boolean;
    formLabel: string;
}

const DateInput = ({
    formTitle,
    isChip = false,
    formLabel,
}: DateInputProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flex: 3,
                    alignItems: "center",
                }}
            >
                <Typography sx={{ ...commonTextStyle }}>{formTitle}</Typography>
                {isChip ? <Chip label="必須" sx={requiredBatchStyle} /> : null}
            </Box>
            <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={ja}
            >
                <DatePicker
                    label={formLabel}
                    format="yyyy年MM月dd日"
                    slotProps={{
                        calendarHeader: { format: "yyyy年MM月" },
                    }}
                />
            </LocalizationProvider>
        </Box>
    );
};

export default DateInput;
