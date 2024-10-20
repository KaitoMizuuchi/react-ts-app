import {
    Box,
    Button,
    Card,
    Container,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ModalOpenProps, UpdateBookProps } from "../types/detailTypes";
import { typeTranslate } from "../utils/typeTranslate";
import OffIcon from "@mui/icons-material/HighlightOff";
import { bookProps } from "@/types";
import { updateBook } from "@/services/books/apiPostBookById";

interface EditModalProps {
    handleModalClose: () => void;
    editData: ModalOpenProps;
    book: bookProps | undefined;
    bookId: string | undefined;
}

const EditModal = ({
    handleModalClose,
    editData,
    book,
    bookId,
}: EditModalProps) => {
    const { value, type } = editData;
    const editTitle = typeTranslate(type);

    const [inputValue, setInputValue] = useState(value);
    const [updateBookData, setUpdateBookData] = useState<UpdateBookProps>({
        title: book?.title,
        author: book?.author,
        translator: book?.translator,
        review: book?.review,
        rating: book?.rating,
        startDate: book?.startDate,
        endDate: book?.endDate,
        categoryId: book?.categoryId,
    });

    useEffect(() => {
        setUpdateBookData({
            ...updateBookData,
            [type]: inputValue,
        });
    }, [inputValue]);

    const handleUpdateBook = () => {
        const isUpdate = window.confirm(`${editTitle}を更新しますか？`);
        if (isUpdate) {
            updateBook(bookId, updateBookData).then(() => {
                window.location.reload();
            });
            handleModalClose();
        }
    };

    return (
        <Container
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                minWidth: "100vw",
                height: "100vh",
                zIndex: 2000,
                overflow: "hidden",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
            onClick={handleModalClose}
        >
            <Card
                sx={{
                    width: "60%",
                    height: "300px",
                    background: "#fff",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2000,
                    p: 8,
                    borderRadius: "15px",
                    boxShadow: "0 0 10px 3px rgba(0, 0, 0, 0.3)",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <IconButton
                    sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        pointerEvents: "auto",
                        pointer: "cursor",
                    }}
                    onClick={handleModalClose}
                >
                    <OffIcon />
                </IconButton>

                <Typography
                    variant="h3"
                    sx={{ fontSize: "28px", mb: 5 }}
                >{`${editTitle}の編集`}</Typography>
                <TextField
                    variant="filled"
                    sx={{ width: "100%" }}
                    value={inputValue}
                    label={`${editTitle}を入力してください`}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Box
                    sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            width: "150px",
                            mr: 3,
                            background: "#dcdcdc",
                            color: "#333",
                        }}
                    >
                        すべての更新
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            width: "fit-content",
                            background: "#00bfff",
                            color: "#ddeeff",
                        }}
                        onClick={handleUpdateBook}
                    >
                        {`${editTitle}のみ更新`}
                    </Button>
                </Box>
            </Card>
        </Container>
    );
};

export default EditModal;
