import { Box, Chip, TextField, Typography } from "@mui/material";
import { commonTextStyle, requiredBatchStyle } from "../formStyles";

interface TextInputProps {
    formTitle: string;
    isChip?: boolean;
    formLabel: string;
}

const TextInput = ({
    formTitle,
    isChip = false,
    formLabel,
}: TextInputProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
            }}
        >
            <Box sx={{ display: "flex", flex: 3, alignItems: "center" }}>
                <Typography sx={{ ...commonTextStyle }}>{formTitle}</Typography>
                {isChip ? <Chip label="必須" sx={requiredBatchStyle} /> : null}
            </Box>

            <TextField sx={{ flex: 10 }} label={formLabel} />
        </Box>
    );
};

export default TextInput;
