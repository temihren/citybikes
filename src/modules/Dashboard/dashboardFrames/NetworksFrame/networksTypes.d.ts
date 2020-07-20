import {INetwork} from "library/common/types/dashboard";

export interface IInitialNetworksState {
    networks_list: any[];
    networks_loading: boolean;
    current_network: INetwork | null;
}

export interface INetworksProps {
    networks: any[];
    loading: boolean;
    requestStations: (network: INetwork) => void;
    currentNetwork: INetwork | null;
}