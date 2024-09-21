import {
    Box,
    Button,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    Rating,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
// datePicker
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { ja } from "date-fns/locale/ja";
import { useAllCategories } from "@/hooks/useAllCategories";
import { formLabel, formTitle } from "./formLabels";
import { commonTextStyle, requiredBatchStyle } from "./formStyles";

const BookForm = () => {
    const { categories, loading, error } = useAllCategories();
    const [ratingValue, setRatingValue] = useState<number | null>(3);

    return (
        <Box component="form" sx={{ maxWidth: "700px", m: "auto", mt: 4 }}>
            <Stack spacing={3}>
                {/* 書籍名 */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{ display: "flex", flex: 3, alignItems: "center" }}
                    >
                        <Typography sx={{ ...commonTextStyle }}>
                            {formTitle.title}
                        </Typography>
                        <Chip label="必須" sx={requiredBatchStyle} />
                    </Box>

                    <TextField sx={{ flex: 10 }} label={formLabel.title} />
                </Box>
                {/* 作者 */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{ display: "flex", flex: 3, alignItems: "center" }}
                    >
                        <Typography sx={{ ...commonTextStyle }}>
                            {formTitle.author}
                        </Typography>
                        <Chip label="必須" sx={requiredBatchStyle} />
                    </Box>
                    <TextField sx={{ flex: 10 }} label={formLabel.author} />
                </Box>
                {/* 翻訳者 */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Typography sx={{ ...commonTextStyle, flex: 3 }}>
                        {formTitle.translator}
                    </Typography>
                    <TextField sx={{ flex: 10 }} label={formLabel.translator} />
                </Box>
                {/* 感想 */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Typography sx={{ ...commonTextStyle, flex: 3 }}>
                        {formTitle.review}
                    </Typography>
                    <TextField
                        sx={{ flex: 10 }}
                        label={formLabel.review}
                        multiline
                        rows={5}
                        variant="standard"
                    />
                </Box>
                {/* 評価 */}
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
                            {formTitle.rating}
                        </Typography>
                        <Chip label="必須" sx={requiredBatchStyle} />
                    </Box>
                    <Box
                        sx={{
                            flex: 10,
                        }}
                    >
                        <Typography sx={{ fontSize: "12px" }}>
                            {formLabel.rating}
                        </Typography>
                        <Rating
                            name="simple-controlled"
                            value={ratingValue}
                            onChange={(event, newValue: number | null) => {
                                setRatingValue(newValue);
                            }}
                        />
                    </Box>
                </Box>
                {/* 読書開始日 */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Typography sx={{ ...commonTextStyle, flex: 3 }}>
                        {formTitle.startDate}
                    </Typography>
                    <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        adapterLocale={ja}
                    >
                        <DatePicker
                            label={formLabel.startDate}
                            format="yyyy年MM月dd日"
                            slotProps={{
                                calendarHeader: { format: "yyyy年MM月" },
                            }}
                        />
                    </LocalizationProvider>
                </Box>
                {/* 読書終了日 */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Typography sx={{ ...commonTextStyle, flex: 3 }}>
                        {formTitle.endDate}
                    </Typography>
                    <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        adapterLocale={ja}
                    >
                        <DatePicker
                            label={formLabel.endDate}
                            format="yyyy年MM月dd日"
                            slotProps={{
                                calendarHeader: { format: "yyyy年MM月" },
                            }}
                        />
                    </LocalizationProvider>
                </Box>
                {/* カテゴリー */}
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
                            {formTitle.category}
                        </Typography>
                        <Chip label="必須" sx={requiredBatchStyle} />
                    </Box>
                    <Box
                        sx={{
                            flex: 7,
                        }}
                    >
                        <FormControl fullWidth>
                            <InputLabel>{formLabel.category}</InputLabel>
                            <Select label={formLabel.category} value="">
                                {error || loading
                                    ? null
                                    : categories.map((categoryItem) => (
                                          <MenuItem
                                              value={categoryItem.id}
                                              key={categoryItem.id}
                                          >
                                              {categoryItem.name}
                                          </MenuItem>
                                      ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
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
