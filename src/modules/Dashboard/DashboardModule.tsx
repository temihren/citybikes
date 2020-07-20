import React, { useEffect } from 'react';
import styles from './dashboardStyles.module.scss';

import Networks from './dashboardFrames/NetworksFrame/NetworksContainer';
import Stations from './dashboardFrames/StationsFrame/StationsContainer';
import {IDashboardModuleProps} from './dashboard';

export default ({initDashboard, currentNetwork}: IDashboardModuleProps) => {
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
