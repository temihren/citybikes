import {
	createAction, createCustomAction,
} from 'typesafe-actions';
import {INetwork} from 'library/common/types/dashboard';

import networksActionTypes from './networksConstants';

export const requestNetworks =
    createAction(networksActionTypes.REQUEST_NETWORKS)();

export const requestNetworksSuccess =
    createCustomAction(networksActionTypes.REQUEST_NETWORKS_SUCCESS, (networks: INetwork[]) => ({networks}));

export const requestNetworksError =
    createAction(networksActionTypes.REQUEST_NETWORKS_ERROR)();

export const selectNetwork =
    createCustomAction(networksActionTypes.SELECT_NETWORK, (network: INetwork) => ({network}));
