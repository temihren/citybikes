import {INetwork, IStation} from "../types/dashboard";

export default (array: INetwork[]) => {
    const originalNames: string[] = [];
    return array.filter((item: INetwork | IStation) => {
        if (originalNames.includes(item.name)) return false;
        originalNames.push(item.name);

        return true;
    })
}