import React from 'react';

import RipplePreloader from '../RipplePreloader';

import styles from './loader.module.scss';

const Loader = () => (
    <div className={styles.Loader} >
        <RipplePreloader height={50} width={50} />
    </div>
)

export default Loader;
