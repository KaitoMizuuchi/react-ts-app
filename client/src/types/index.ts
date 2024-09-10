
// ナビゲーションバーの型
export interface navbarItemsProps {
    path: string;
    label: string;
    icon: JSX.ElementType;
    selected: boolean;
}

// データベースから取得する型
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

// ブックリストで表示するデータの方
export interface bookListProps {
    id: number;
    title: string;
    author: string;
    category: string;
    rating: number | null;
}
