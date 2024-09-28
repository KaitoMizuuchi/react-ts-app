import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const categoryData = [
    {name: "自己啓発"},
    {name: "ビジネス"},
    {name: "学習"},
    {name: "テクノロジー"},
    {name: "デザイン"},
    {name: "マーケティング"},
    {name: "ファイナンス"},
]

const main = async () => {

    const categories = await prisma.categories.createMany({
        data: categoryData
    })
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
    })