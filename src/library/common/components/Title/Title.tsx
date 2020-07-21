import React, {CSSProperties} from 'react';

import styles from './title.module.scss';

interface ITitleProps {
    text: string;
    side?: 'left' | 'right';
}

const Title = ({text, side}: ITitleProps) =>
    <p
        className={styles.Title}
        style={side ? {textAlign: `${side}`} as CSSProperties : undefined}
    >
        {text}
    </p>

export default Title;
