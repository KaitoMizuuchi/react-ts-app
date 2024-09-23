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
    selectItems: JSX.Element[];
    error?: string;
    fetchError?: string | null;
    loading?: boolean;
}

const SelectInput = ({
    formName,
    formTitle,
    isChip = false,
    formLabel,
    selectItems,
    error,
    fetchError,
    loading,
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
                            flex: 10,
                        }}
                    >
                        {loading ? (
                            <Typography>Loading...</Typography>
                        ) : fetchError ? (
                            <Typography>{fetchError}</Typography>
                        ) : (
                            <FormControl fullWidth>
                                <InputLabel>{formLabel}</InputLabel>
                                <Select
                                    label={formLabel}
                                    {...field}
                                    value={field.value}
                                >
                                    {selectItems}
                                </Select>
                            </FormControl>
                        )}
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

export default SelectInput;
