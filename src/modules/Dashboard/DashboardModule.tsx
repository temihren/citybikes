import React, {useEffect} from 'react';

import Networks from './dashboardFrames/NetworksFrame/NetworksContainer';
import Stations from './dashboardFrames/StationsFrame/StationsContainer';

import styles from './dashboardStyles.module.scss';

interface IDashboardModuleProps {
    initDashboard: () => void;
    currentNetwork: {
        name: string;
        id: string;
    } | null;
}

const DashboardModule = ({initDashboard, currentNetwork}: IDashboardModuleProps) => {
    useEffect(() => {
        initDashboard();
    }, [initDashboard]);

    return (
        <div className={styles.Dashboard}>
            <Networks currentNetwork={currentNetwork}/>
            <Stations currentNetwork={currentNetwork}/>
        </div>
    )
}

export default DashboardModule;