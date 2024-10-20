

interface translateProps {
    [key: string]: string;
    title: string;
    author: string;
    translator: string;
    category: string;
    rating: string;
    review: string;
    startDate: string;
    endDate: string;
}

const translateData: translateProps = {
    title: "タイトル",
    author: "著者",
    translator: "翻訳者",
    category: "カテゴリー",
    rating: "評価",
    review: "レビュー",
    startDate: "読書開始日",
    endDate: "読書終了日",
}

export const typeTranslate = (type: string)=> {
    return translateData[type];
}