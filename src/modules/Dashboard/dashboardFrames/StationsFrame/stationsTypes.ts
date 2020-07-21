import {IStation} from "library/common/types/dashboard";

export interface IInitialStationsState {
    stations_list: IStation[];
    stations_loading: boolean;
    liked_stations: string[];
}
