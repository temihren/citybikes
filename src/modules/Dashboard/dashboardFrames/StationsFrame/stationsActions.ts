import {
	createAction, createCustomAction,
} from 'typesafe-actions';
import {INetwork, IStation} from 'library/common/types/dashboard';

import stationsActionTypes from './stationsConstants';

export const requestStations =
    createCustomAction(stationsActionTypes.REQUEST_STATIONS, (network: INetwork) => ({network}));

export const requestStationsSuccess =
    createCustomAction(stationsActionTypes.REQUEST_STATIONS_SUCCESS, (stations: IStation[]) => ({stations}));

export const requestStationsError =
    createAction(stationsActionTypes.REQUEST_STATIONS_ERROR)();

export const toggleStationLike =
    createCustomAction(stationsActionTypes.TOGGLE_STATION_LIKE, (id: string) => ({id}));

export const toggleStationLikeSuccess =
    createCustomAction(stationsActionTypes.TOGGLE_STATION_LIKE_SUCCESS, (id: string) => ({id}));