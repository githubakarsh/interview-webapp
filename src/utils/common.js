
export const filterList = (page, list) => {
    const start = 10*(page-1);
    const end = (page*10);
    console.log(start);
    console.log(end);
    const items = list?.slice(start, end);
    return items;
}
