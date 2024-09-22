import { Box, Chip, TextField, Typography } from "@mui/material";
import { commonTextStyle, requiredBatchStyle } from "../formStyles";
import { Controller, useFormContext } from "react-hook-form";

interface TextInputProps {
    formName: string;
    formTitle: string;
    isChip?: boolean;
    formLabel: string;
}

const TextInput = ({
    formName,
    formTitle,
    isChip = false,
    formLabel,
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

                    <TextField sx={{ flex: 10 }} label={formLabel} {...field} />
                </Box>
            )}
        />
    );
};

export default TextInput;
