import {
	createAction, createCustomAction,
} from 'typesafe-actions';
import networksActionTypes from './networksConstants';
import {INetwork} from 'library/common/types/dashboard';

export const requestNetworks =
    createAction(networksActionTypes.REQUEST_NETWORKS)();

export const requestNetworksSuccess =
    createCustomAction(networksActionTypes.REQUEST_NETWORKS_SUCCESS, (networks: any[]) => ({networks}));

export const requestNetworksError =
    createAction(networksActionTypes.REQUEST_NETWORKS_ERROR)();

export const selectNetwork =
    createCustomAction(networksActionTypes.SELECT_NETWORK, (network: INetwork) => ({network}));
