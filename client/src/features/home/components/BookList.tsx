import { bookListProps } from "@/types";
import { Box, Button, Chip, Rating, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { useBookList } from "../hooks/useBookList";
import Loading from "@/components/Loading";

const BookList = () => {
    const navigate = useNavigate();
    const { bookList, loading, error } = useBookList();

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
                    sx={{ px: 1, border: "#ccc solid 1px" }}
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
                    onClick={(e) => handleDelete(e, params.row.id)}
                    type="button"
                    sx={{ width: "100%" }}
                >
                    削除
                </Button>
            ),
        },
    ];

    // 削除ボタンを押された時の処理
    const handleDelete = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        selectedId: number
    ) => {
        e.stopPropagation();
        window.confirm(`id：${selectedId}を削除しますか？`);
    };

    if (loading) return <Loading />;
    if (error) return <div>エラーが出ました。</div>;

    return (
        <Box sx={{ minHeight: 600, width: "100%", height: "auto", mt: 4 }}>
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
        </Box>
    );
};

export default BookList;
