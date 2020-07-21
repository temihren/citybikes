import React, {MouseEvent, ReactElement} from 'react';

import styles from './listItem.module.scss';

interface IListItem {
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
    children: ReactElement | string;
    currentItem?: boolean;
}

const ListItem = ({onClick, children, currentItem}: IListItem) => (
    <div className={`${styles.ListItem} ${currentItem ? styles.ListItem__selected : ''} `} onClick={onClick}>
        {children}
    </div>
)

export default ListItem;
