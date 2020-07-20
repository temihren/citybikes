export interface IInitialStationsState {
    stations_list: any[];
    stations_loading: boolean;
    liked_stations: string[];
}

export interface IStationsProps {
    stations: any[];
    loading: boolean;
    likedStations: string[];
    toggleStationLike: (id: string) => void;
    currentNetwork: {
        name: string;
        id: string;
    } | null;
}