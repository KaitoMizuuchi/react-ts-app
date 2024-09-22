import {
    Box,
    Button,
    Container,
    Menu,
    MenuItem,
    Stack,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useAllCategories } from "@/hooks/useAllCategories";
import { formLabel, formTitle } from "./formLabels";
import TextInput from "./inputs/TextInput";
import SentenceInput from "./inputs/SentenceInput";
import RatingInput from "./inputs/RatingInput";
import DateInput from "./inputs/DateInput";
import SelectInput from "./inputs/SelectInput";
import { FormProvider, useForm } from "react-hook-form";
import { BookFormType, bookSchema } from "@/validations/BookFormValidate";
import { zodResolver } from "@hookform/resolvers/zod";

const BookForm = () => {
    const { categories, loading, error } = useAllCategories();

    const methods = useForm<BookFormType>({
        defaultValues: {
            title: "",
            author: "",
            translator: "",
            review: "",
            rating: 3,
            startDate: null,
            endDate: null,
            categoryId: 1,
        },
        resolver: zodResolver(bookSchema),
    });
    const {
        handleSubmit,
        formState: { errors },
    } = methods;

    const handleBookFormSubmit = (data: any) => {
        console.log(data);
        console.log("first");
    };

    return (
        <Container sx={{ mt: 6 }}>
            <FormProvider {...methods}>
                <Box
                    component="form"
                    sx={{ maxWidth: "700px", m: "auto", mt: 4 }}
                    onSubmit={handleSubmit(handleBookFormSubmit)}
                >
                    <Stack spacing={5}>
                        {/* 書籍名 */}
                        <TextInput
                            formName="title"
                            formTitle={formTitle.title}
                            formLabel={formLabel.title}
                            isChip={true}
                            error={errors.title?.message}
                        />
                        {/* 作者 */}
                        <TextInput
                            formName="author"
                            formTitle={formTitle.author}
                            formLabel={formLabel.author}
                            isChip={true}
                            error={errors.author?.message}
                        />
                        {/* 翻訳者 */}
                        <TextInput
                            formName="translator"
                            formTitle={formTitle.translator}
                            formLabel={formLabel.translator}
                        />
                        {/* 感想 */}
                        <SentenceInput
                            formName="review"
                            formTitle={formTitle.review}
                            formLabel={formLabel.review}
                        />
                        {/* 評価 */}
                        <RatingInput
                            formName="rating"
                            formTitle={formTitle.rating}
                            isChip={true}
                            formLabel={formLabel.rating}
                        />
                        {/* 読書開始日 */}
                        <DateInput
                            formName="startDate"
                            formTitle={formTitle.startDate}
                            formLabel={formLabel.startDate}
                        />
                        {/* 読書終了日 */}
                        <DateInput
                            formName="endDate"
                            formTitle={formTitle.endDate}
                            formLabel={formLabel.endDate}
                        />
                        {/* カテゴリー */}
                        <SelectInput
                            formName="categoryId"
                            formTitle={formTitle.category}
                            isChip={true}
                            formLabel={formLabel.category}
                            fetchError={error}
                            loading={loading}
                            selectItems={categories.map((categoryItem) => (
                                <MenuItem
                                    value={categoryItem.id}
                                    key={categoryItem.id}
                                >
                                    {categoryItem.name}
                                </MenuItem>
                            ))}
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
            </FormProvider>
        </Container>
    );
};

export default BookForm;
