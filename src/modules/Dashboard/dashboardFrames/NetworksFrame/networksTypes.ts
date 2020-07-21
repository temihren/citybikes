import {INetwork} from "library/common/types/dashboard";

export interface IInitialNetworksState {
    networks_list: INetwork[];
    networks_loading: boolean;
    current_network: INetwork | null;
}
