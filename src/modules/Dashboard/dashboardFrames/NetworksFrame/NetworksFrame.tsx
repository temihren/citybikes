import React from 'react';
import {INetworksProps} from './networksTypes';
import styles from './networksStyles.module.scss';
import Panel from 'library/common/components/Panel/Panel';
import ListItem from 'library/common/components/ListItem/ListItem';
import Loader from 'library/common/components/Loader/Loader';
import Title from 'library/common/components/Title/Title';

export default ({loading, networks, requestStations, currentNetwork}: INetworksProps) => (
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