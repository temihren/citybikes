import React, {CSSProperties} from 'react';
import styles from './title.module.scss';

export default ({text, side}: {text: string, side?: 'left' | 'right'}) =>
    <p className={styles.Title} style={side ? {textAlign: `${side}`} as CSSProperties : undefined}>{text}</p>
