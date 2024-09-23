import { Box, Chip, Rating, Typography } from "@mui/material";
import { commonTextStyle, requiredBatchStyle } from "../formStyles";
import { Controller, useFormContext } from "react-hook-form";

interface RatingInputProps {
    formName: string;
    formTitle: string;
    isChip?: boolean;
    formLabel: string;
    error?: string;
}

const RatingInput = ({
    formName,
    formTitle,
    isChip = false,
    formLabel,
    error,
}: RatingInputProps) => {
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
                    <Box
                        sx={{
                            flex: 10,
                        }}
                    >
                        <Typography sx={{ fontSize: "12px" }}>
                            {formLabel}
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Rating
                                {...field}
                                value={parseInt(field.value)}
                                onChange={(_, newValue) =>
                                    field.onChange(newValue)
                                }
                            />
                            <Typography sx={{ ml: 5, fontSize: "18px" }}>
                                {field.value}
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                color: "red",
                                position: "absolute",
                                bottom: -27,
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

export default RatingInput;
