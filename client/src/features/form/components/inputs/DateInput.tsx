import { Box, Chip, Typography } from "@mui/material";
import { commonTextStyle, requiredBatchStyle } from "../formStyles";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { ja } from "date-fns/locale/ja";
import { Controller, useFormContext } from "react-hook-form";

interface DateInputProps {
    formName: string;
    formTitle: string;
    isChip?: boolean;
    formLabel: string;
    isSelected?: boolean;
    error?: string;
}

const DateInput = ({
    formName,
    formTitle,
    isChip = false,
    formLabel,
    isSelected,
    error,
}: DateInputProps) => {
    const { control } = useFormContext();
    return (
        <Controller
            name={formName}
            control={control}
            render={({ field }) => (
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
                        <Typography sx={{ ...commonTextStyle }}>
                            {formTitle}
                        </Typography>
                        {isChip ? (
                            <Chip label="必須" sx={requiredBatchStyle} />
                        ) : null}
                    </Box>
                    <Box sx={{ flex: 10, width: "100%", position: "relative" }}>
                        <LocalizationProvider
                            dateAdapter={AdapterDateFns}
                            adapterLocale={ja}
                        >
                            <DatePicker
                                {...field}
                                disabled={isSelected}
                                label={formLabel}
                                format="yyyy年MM月dd日"
                                slotProps={{
                                    calendarHeader: { format: "yyyy年MM月" },
                                    textField: {
                                        error: !!error,
                                        sx: error
                                            ? {
                                                  "& .MuiOutlinedInput-root": {
                                                      "&.Mui-error": {
                                                          borderColor:
                                                              "#d32f2f",
                                                      },
                                                  },
                                              }
                                            : {},
                                    },
                                }}
                            />
                        </LocalizationProvider>
                        <Typography
                            sx={{
                                color: "#d32f2f",
                                position: "absolute",
                                left: 0,
                                mt: 0.5,
                            }}
                        >
                            {error ? error : ""}
                        </Typography>
                    </Box>
                </Box>
            )}
        />
    );
};

export default DateInput;
