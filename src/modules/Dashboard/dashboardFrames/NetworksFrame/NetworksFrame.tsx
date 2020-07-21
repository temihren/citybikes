import React from 'react';
import Panel from 'library/common/components/Panel/Panel';
import ListItem from 'library/common/components/ListItem/ListItem';
import Loader from 'library/common/components/Loader/Loader';
import Title from 'library/common/components/Title/Title';
import {INetwork} from 'library/common/types/dashboard';

import styles from './networksStyles.module.scss';

interface INetworksProps {
    networks: INetwork[];
    loading: boolean;
    requestStations: (network: INetwork) => void;
    currentNetwork: INetwork | null;
}

const NetworksFrame = ({loading, networks, requestStations, currentNetwork}: INetworksProps) => (
    <Panel>
        <>
            <Title text='Networks'/>
            {loading ? (
                <Loader />
            ) : (
                <div className={styles.networksList}>
                    {networks.map((network, index) => (
                        <ListItem
                            key={`network_${index}_${network.id}`}
                            currentItem={currentNetwork ? network.id === currentNetwork.id : false}
                            onClick={() => requestStations(network)}
                        >
                            {network.name}
                        </ListItem>
                    ))}
                </div>
            )}
        </>
    </Panel>
)

export default NetworksFrame;
