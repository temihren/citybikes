import {INetworksState} from './dashboardFrames/NetworksFrame/networksReducer';

export const getCurrentNetwork = (state: INetworksState) => state.current_network;