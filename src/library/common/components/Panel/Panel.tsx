import React, { ReactElement } from 'react';
import styles from './panel.module.scss';

export default ({children}: {children: ReactElement}) => (
    <div className={styles.Panel}>
        {children}
    </div>
)