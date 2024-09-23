import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export const categoryService = {
    // カテゴリー全データ取得
    async getAllCategories() {
        const allCategories = await prisma.categories.findMany({
            where: {
                deletedAt: null
            },
        });
        return allCategories;
    }
}
