

export const getFormatDate = (date: Date) => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDay();

    const formatDate = `${year}年${month}月${day}日`;
    return formatDate;
};
