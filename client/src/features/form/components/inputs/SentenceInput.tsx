import { Box, Chip, TextField, Typography } from "@mui/material";
import { commonTextStyle, requiredBatchStyle } from "../formStyles";
import { Controller, useFormContext } from "react-hook-form";

interface SentenceInputProps {
    formName: string;
    formTitle: string;
    isChip?: boolean;
    formLabel: string;
}

const SentenceInput = ({
    formName,
    formTitle,
    isChip = false,
    formLabel,
}: SentenceInputProps) => {
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
                    <TextField
                        {...field}
                        sx={{ flex: 10 }}
                        label={formLabel}
                        multiline
                        rows={5}
                        variant="standard"
                    />
                </Box>
            )}
        />
    );
};

export default SentenceInput;
