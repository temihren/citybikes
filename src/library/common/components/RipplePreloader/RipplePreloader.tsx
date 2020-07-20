import React from 'react';

import styles from './ripplePreloaderStyles.module.scss';

interface IRippleLoader {
	width?: number;
	height?: number;
	color?: string;
}

const RipplePreloader = ({width = 14, height = 14, color = '#777'}: IRippleLoader) => (
	<div
		className={styles.loader}
		style={
			{
				width: `${width}px`,
				height: `${height}px`,
				borderTop: `2px solid ${color}`,
				borderRight: `2px solid ${color}`,
				borderBottom: `2px solid ${color}`,
				borderLeft: '2px solid rgba(255, 255, 255, 0)',
			}
		}
	>
		<div />
		<div />
		<div />
		<div />
	</div>
);

export default RipplePreloader;
