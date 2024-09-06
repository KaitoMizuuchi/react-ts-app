
export interface BookProps {
    title: string;
    author: string;
    translator?: string;
    review?: string;
    rating: | 1 | 2 | 3 | 4 | 5; //5段階評価
    startDate?: Date;
    endDate?: Date;
    categoryId: number;
}
