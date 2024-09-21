import { Box, Button, MenuItem, Stack } from "@mui/material";
import { useState } from "react";
import { useAllCategories } from "@/hooks/useAllCategories";
import { formLabel, formTitle } from "./formLabels";
import TextInput from "./inputs/TextInput";
import SentenceInput from "./inputs/SentenceInput";
import RatingInput from "./inputs/RatingInput";
import DateInput from "./inputs/DateInput";
import SelectInput from "./inputs/SelectInput";

const BookForm = () => {
    const { categories, loading, error } = useAllCategories();
    const [ratingValue, setRatingValue] = useState<number | null>(3);

    return (
        <Box component="form" sx={{ maxWidth: "700px", m: "auto", mt: 4 }}>
            <Stack spacing={3}>
                {/* 書籍名 */}
                <TextInput
                    formTitle={formTitle.title}
                    formLabel={formLabel.title}
                    isChip={true}
                />
                {/* 作者 */}
                <TextInput
                    formTitle={formTitle.author}
                    formLabel={formLabel.author}
                    isChip={true}
                />
                {/* 翻訳者 */}
                <TextInput
                    formTitle={formTitle.translator}
                    formLabel={formLabel.translator}
                />
                {/* 感想 */}
                <SentenceInput
                    formTitle={formTitle.review}
                    formLabel={formLabel.review}
                />
                {/* 評価 */}
                <RatingInput
                    formTitle={formTitle.rating}
                    isChip={true}
                    formLabel={formLabel.rating}
                    ratingValue={ratingValue}
                    onRatingChange={(event, newValue: number | null) => {
                        setRatingValue(newValue);
                    }}
                />
                {/* 読書開始日 */}
                <DateInput
                    formTitle={formTitle.startDate}
                    formLabel={formLabel.startDate}
                />
                {/* 読書終了日 */}
                <DateInput
                    formTitle={formTitle.endDate}
                    formLabel={formLabel.endDate}
                />
                {/* カテゴリー */}
                <SelectInput
                    formTitle={formTitle.category}
                    isChip={true}
                    formLabel={formLabel.category}
                    selectItems={
                        error || loading
                            ? null
                            : categories.map((categoryItem) => (
                                  <MenuItem
                                      value={categoryItem.id}
                                      key={categoryItem.id}
                                  >
                                      {categoryItem.name}
                                  </MenuItem>
                              ))
                    }
                />
            </Stack>
            <Button
                type="submit"
                variant="contained"
                sx={{ width: "100%", my: 5, background: "#00bfff" }}
            >
                送信
            </Button>
        </Box>
    );
};

export default BookForm;
