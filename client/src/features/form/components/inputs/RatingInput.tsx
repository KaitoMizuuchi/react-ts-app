import { Box, Chip, Rating, Typography } from "@mui/material";
import { commonTextStyle, requiredBatchStyle } from "../formStyles";
import { SyntheticEvent } from "react";

interface RatingInputProps {
    formTitle: string;
    isChip?: boolean;
    formLabel: string;
    ratingValue: number | null;
    onRatingChange: (
        event: SyntheticEvent<Element, Event>,
        value: number | null
    ) => void;
}

const RatingInput = ({
    formTitle,
    isChip = false,
    formLabel,
    ratingValue,
    onRatingChange,
}: RatingInputProps) => {
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
                    flex: 10,
                }}
            >
                <Typography sx={{ fontSize: "12px" }}>{formLabel}</Typography>
                <Rating
                    name="simple-controlled"
                    value={ratingValue}
                    onChange={onRatingChange}
                />
            </Box>
        </Box>
    );
};

export default RatingInput;
