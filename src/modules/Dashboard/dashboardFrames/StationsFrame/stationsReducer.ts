import {ActionType, getType, StateType} from 'typesafe-actions';
import * as stationsActions from './stationsActions';

import {IInitialStationsState} from './stationsTypes.d';

const initialState: IInitialStationsState = {
    stations_list: [],
    stations_loading: true,
    liked_stations: [],
};

export type IStationsActions = ActionType<typeof stationsActions>;

const stationsReducer = (state: typeof initialState = initialState, action: IStationsActions) => {
    switch (action.type) {
        case getType(stationsActions.requestStations):
            return {
                ...state,
                stations_loading: true,
                stations_list: [],
            }
        case getType(stationsActions.requestStationsSuccess):
            return {
                ...state,
                stations_list: action.stations,
                stations_loading: false,
            };
        case getType(stationsActions.requestStationsError):
            return {
                ...state,
                stations_list: [],
                stations_loading: false,
            }
        case getType(stationsActions.toggleStationLikeSuccess):
            let newLikedArray = state.liked_stations.slice();

            if (state.liked_stations.includes(action.id)) {
                newLikedArray = newLikedArray.filter(id => id !== action.id);
            } else {
                newLikedArray.push(action.id);
            }

            return {
                ...state,
                liked_stations: newLikedArray,
            }
        default:
            return state;
    }
}

export type IStationsState = StateType<typeof stationsReducer>;

export default stationsReducer;