import React, {ReactElement} from 'react';

import styles from './panel.module.scss';

interface IPanelProps {
    children: ReactElement;
}

const Panel = ({children}: IPanelProps) => (
    <div className={styles.Panel}>
        {children}
    </div>
)

export default Panel;
