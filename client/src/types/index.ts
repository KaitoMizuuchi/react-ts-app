
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
    startDate?: Date | null;  // Date型でも可
    endDate?: Date | null;    // Date型でも可
    categoryId: number;
    category: {
        id: number;
        name: string;
    };
    createdAt: string;  // Date型でも可
    updatedAt: string;  // Date型でも可
    deletedAt?: string | null;
}


// ブックリストで表示する型
export interface bookListProps {
    id: number;
    title: string;
    author: string;
    category: string;
    rating: number | null;
}


// カテゴリーデータの型
export interface categoryProps {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}

// 本データの入力時の型
export interface inputBookProps {
    title: string;
    author: string;
    translator?: string | null;
    review?: string | null;
    rating: number;
    startDate?: Date | null;
    endDate?: Date | null;
    categoryId: string;
}
