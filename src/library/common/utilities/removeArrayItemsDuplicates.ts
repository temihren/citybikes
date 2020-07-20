export default (array: any[]) => {
    const originalNames: string[] = [];
    return array.filter((item: any) => {
        if (originalNames.includes(item.name)) return false;
        originalNames.push(item.name);

        return true;
    })
}