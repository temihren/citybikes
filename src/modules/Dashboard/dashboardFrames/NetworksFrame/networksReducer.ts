import {ActionType, getType, StateType} from 'typesafe-actions';

import * as networksActions from './networksActions';
import {IInitialNetworksState} from './networksTypes';

const initialState: IInitialNetworksState = {
    networks_list: [],
    networks_loading: true,
    current_network: null,
};

export type INetworksActions = ActionType<typeof networksActions>;

export type INetworksState = StateType<typeof networksReducer>;

const networksReducer = (state = initialState, action: INetworksActions) => {
    switch (action.type) {
        case getType(networksActions.requestNetworks):
            return {
                ...state,
                networks_loading: true,
            }
        case getType(networksActions.requestNetworksSuccess):
            return {
                ...state,
                networks_list: action.networks,
                networks_loading: false,
            };
        case getType(networksActions.requestNetworksError):
            return {
                ...state,
                networks_list: [],
                networks_loading: false,
            }
        case getType(networksActions.selectNetwork):
            return {
                ...state,
                current_network: action.network,
            }
        default:
            return state;
    }
}

export default networksReducer;