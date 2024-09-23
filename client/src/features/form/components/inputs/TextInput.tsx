import { Box, Chip, TextField, Typography } from "@mui/material";
import { commonTextStyle, requiredBatchStyle } from "../formStyles";
import { Controller, useFormContext } from "react-hook-form";

interface TextInputProps {
    formName: string;
    formTitle: string;
    isChip?: boolean;
    formLabel: string;
    error?: string;
}

const TextInput = ({
    formName,
    formTitle,
    isChip = false,
    formLabel,
    error,
}: TextInputProps) => {
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
                        sx={{ display: "flex", flex: 3, alignItems: "center" }}
                    >
                        <Typography sx={{ ...commonTextStyle }}>
                            {formTitle}
                        </Typography>
                        {isChip ? (
                            <Chip label="必須" sx={requiredBatchStyle} />
                        ) : null}
                    </Box>
                    <Box sx={{ flex: 10, width: "100%", position: "relative" }}>
                        <TextField
                            {...field}
                            label={formLabel}
                            sx={{ width: "100%" }}
                            error={error ? true : false}
                        />
                        <Typography
                            sx={{
                                color: "#d32f2f",
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

export default TextInput;
