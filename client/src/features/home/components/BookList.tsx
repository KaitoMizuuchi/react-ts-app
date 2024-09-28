import { Box, Button, Chip, Rating, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { useBookList } from "../hooks/useBookList";
import Loading from "@/components/Loading";
import { deleteBook } from "@/services/books/apiDeleteBook";
import { bookListProps } from "@/types";

const BookList = () => {
    const navigate = useNavigate();
    const { bookList, setBookList, loading, error } = useBookList();

    const columns: GridColDef<(typeof bookList)[number]>[] = [
        {
            field: "title",
            headerName: "TITLE",
            flex: 1,
            headerAlign: "left",
            align: "left",
        },
        {
            field: "author",
            headerName: "Author",
            flex: 1,
            headerAlign: "left",
            align: "left",
        },
        {
            field: "category",
            headerName: "Category",
            flex: 1,
            headerAlign: "left",
            align: "left",
            renderCell: (params: GridRenderCellParams<bookListProps>) => (
                <Chip
                    label={params.row.category}
                    sx={{
                        px: 1,
                        border: "#ccc solid 1px",
                        height: "24px",
                        background: "#faa5fa",
                        color: "#333",
                    }}
                    variant="filled"
                />
            ),
        },
        {
            field: "rating",
            headerName: "Rating",
            type: "number",
            flex: 0.8,
            headerAlign: "left",
            align: "left",
            renderCell: (params: GridRenderCellParams<bookListProps>) => (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    {params.row.rating !== null ? (
                        <Rating
                            name="read-only"
                            value={params.row.rating}
                            readOnly
                        />
                    ) : (
                        <Typography>評価無し</Typography>
                    )}
                </Box>
            ),
        },
        {
            field: "deleteButton",
            headerName: "delete",
            width: 130,
            headerAlign: "left",
            align: "center",
            renderCell: (params: GridRenderCellParams<bookListProps>) => (
                <Button
                    variant="contained"
                    color="error"
                    onClick={(e) =>
                        handleDelete(e, params.row.id, params.row.title)
                    }
                    type="button"
                    sx={{ width: "100%" }}
                >
                    削除
                </Button>
            ),
        },
    ];

    // 削除ボタンを押された時の処理
    const handleDelete = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        selectedId: number,
        title: string
    ) => {
        e.stopPropagation();
        const isDelete = window.confirm(`id：${title}を削除しますか？`);
        if (isDelete) {
            await deleteBook(selectedId);
            setBookList((prevList) =>
                prevList.filter((book) => book.id !== selectedId)
            );
        }
    };

    return (
        <Box sx={{ minHeight: 600, width: "100%", height: "auto", mt: 4 }}>
            {loading ? (
                <Loading />
            ) : error ? (
                <div>エラーが出ました。</div>
            ) : (
                <DataGrid
                    rows={bookList}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[10]}
                    onCellClick={(params) => navigate(`/${params.row.id}`)}
                />
            )}
        </Box>
    );
};

export default BookList;
