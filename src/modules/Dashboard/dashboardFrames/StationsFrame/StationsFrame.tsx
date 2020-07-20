import React from 'react';
import {IStationsProps} from './stationsTypes';
import styles from './stationsStyles.module.scss';
import Panel from 'library/common/components/Panel/Panel';
import ListItem from 'library/common/components/ListItem/ListItem';
import Loader from 'library/common/components/Loader/Loader';
import Title from 'library/common/components/Title/Title';
import likeSVG from 'resources/images/heart.svg';

export default ({loading, stations, likedStations, toggleStationLike, currentNetwork}: IStationsProps) => (
    <Panel>
        <>
            <Title text={'Stations'} side='right'/>

            {currentNetwork ? (
                <span className={styles.stationsTitle}>Of <b>{currentNetwork.name}</b> network</span>
            ) : null}

            {!!stations.length && <div className={styles.divider}/>}

            {!!stations.length && (
                <span className={styles.stationsTitle}>
                    Total free bikes in these stations:
                    <b>
                        {stations.reduce((total, station) => total+= station.free_bikes, 0)}
                    </b>
                </span>
            )}

            {loading ? (
                <Loader />
            ) : (<>
                {stations.length && !loading ? (
                    <div className={styles.stationsList}>
                        {stations.map((station, index) => (
                            <ListItem
                                key={`network_${index}_${station.id}`}
                                onClick={() => toggleStationLike(station.id)}
                            >
                                <div className={styles.station}>
                                    {station.name}
                                    {likedStations.includes(station.id) && (
                                        <img src={likeSVG} alt='like' className={styles.heartIcon}/>
                                    )}
                                </div>
                            </ListItem>
                        ))}
                    </div>
                ) : 'No stations'}
            </>)}
        </>
    </Panel>
)