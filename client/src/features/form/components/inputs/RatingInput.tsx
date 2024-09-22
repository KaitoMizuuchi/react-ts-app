import { Box, Chip, Rating, Typography } from "@mui/material";
import { commonTextStyle, requiredBatchStyle } from "../formStyles";
import { Controller, useFormContext } from "react-hook-form";

interface RatingInputProps {
    formName: string;
    formTitle: string;
    isChip?: boolean;
    formLabel: string;
}

const RatingInput = ({
    formName,
    formTitle,
    isChip = false,
    formLabel,
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
                        <Rating {...field} value={parseInt(field.value)} />
                    </Box>
                </Box>
            )}
        />
    );
};

export default RatingInput;
