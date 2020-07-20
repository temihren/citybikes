import {INetworksState} from '../NetworksFrame/networksReducer';

export const getNetworksList = (state: INetworksState) => state.networks_list;
export const getNetworksLoading = (state: INetworksState) => state.networks_loading;