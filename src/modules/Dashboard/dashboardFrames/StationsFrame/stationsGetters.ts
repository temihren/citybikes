import {IStationsState} from 'modules/Dashboard/dashboardFrames/StationsFrame/stationsReducer';

export const getStationsList = (state: IStationsState) => state.stations_list;
export const getStationsLoading = (state: IStationsState) => state.stations_loading;
export const getLikedStations = (state: IStationsState) => state.liked_stations;