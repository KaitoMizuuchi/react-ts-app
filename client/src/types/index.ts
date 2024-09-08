
// ナビゲーションバーの型
export interface navbarItemsProps {
    path: string;
    label: string;
    icon: JSX.ElementType;
    selected: boolean;
}

export interface bookProps {
    id: number;
    title: string;
    author: string;
    translator?: string | null;
    review?: string | null;
    rating?: number | null;
    startDate?: string | null;  // Date型でも可
    endDate?: string | null;    // Date型でも可
    categoryId: number;
    category: {
        id: number;
        name: string;
    };
    createdAt: string;  // Date型でも可
    updatedAt: string;  // Date型でも可
    deletedAt?: string | null;

}
