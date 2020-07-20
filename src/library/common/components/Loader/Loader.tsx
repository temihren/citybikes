import React from 'react';
import styles from './loader.module.scss';
import RipplePreloader from '../RipplePreloader';

export default () => (
    <div className={styles.Loader} >
        <RipplePreloader height={50} width={50} />
    </div>
)