import {
    Box,
    Chip,
    FormControl,
    InputLabel,
    Select,
    Typography,
} from "@mui/material";
import { commonTextStyle, requiredBatchStyle } from "../formStyles";
import { Controller, useFormContext } from "react-hook-form";

interface SelectInputProps {
    formName: string;
    formTitle: string;
    isChip?: boolean;
    formLabel: string;
    selectItems: JSX.Element[] | null;
}

const SelectInput = ({
    formName,
    formTitle,
    isChip = false,
    formLabel,
    selectItems,
}: SelectInputProps) => {
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
                            flex: 7,
                        }}
                    >
                        <FormControl fullWidth>
                            <InputLabel>{formLabel}</InputLabel>
                            <Select label={formLabel} {...field}>
                                {selectItems}
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            )}
        />
    );
};

export default SelectInput;
