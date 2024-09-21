import { Box, Chip, TextField, Typography } from "@mui/material";
import { commonTextStyle, requiredBatchStyle } from "../formStyles";

interface SentenceInputProps {
    formTitle: string;
    isChip?: boolean;
    formLabel: string;
}

const SentenceInput = ({
    formTitle,
    isChip = false,
    formLabel,
}: SentenceInputProps) => {
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
            <TextField
                sx={{ flex: 10 }}
                label={formLabel}
                multiline
                rows={5}
                variant="standard"
            />
        </Box>
    );
};

export default SentenceInput;
