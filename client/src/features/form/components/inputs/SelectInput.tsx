import {
    Box,
    Chip,
    FormControl,
    InputLabel,
    Select,
    Typography,
} from "@mui/material";
import { commonTextStyle, requiredBatchStyle } from "../formStyles";

interface SelectInputProps {
    formTitle: string;
    isChip?: boolean;
    formLabel: string;
    selectItems: JSX.Element[] | null;
}

const SelectInput = ({
    formTitle,
    isChip = false,
    formLabel,
    selectItems,
}: SelectInputProps) => {
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
            <Box
                sx={{
                    flex: 7,
                }}
            >
                <FormControl fullWidth>
                    <InputLabel>{formLabel}</InputLabel>
                    <Select label={formLabel} value="">
                        {selectItems}
                    </Select>
                </FormControl>
            </Box>
        </Box>
    );
};

export default SelectInput;
