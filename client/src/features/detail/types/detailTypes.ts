export interface ModalOpenProps {
    value: string | number | null | undefined;
    type: string;
}

export interface UpdateBookProps {
        title: string | undefined;
        author: string | undefined;
        translator: string | null | undefined;
        review: string | null | undefined;
        rating: number | null | undefined;
        startDate: Date | null | undefined;
        endDate: Date  | null | undefined;
        categoryId: number | undefined;
}