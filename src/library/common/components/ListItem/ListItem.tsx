import React, {MouseEvent, ReactElement} from 'react';
import styles from './listItem.module.scss';

interface IListItem {
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
    children: ReactElement;
    currentItem?: boolean;
}

export default ({onClick, children, currentItem}: IListItem) => (
    <div className={`${styles.ListItem} ${currentItem ? styles.ListItem__selected : ''} `} onClick={onClick}>
        {children}
    </div>
)