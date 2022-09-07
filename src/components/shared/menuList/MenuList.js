import React from 'react';

// style
import styles from './MenuList.module.css'

// icon
import downArr from "../../../icons/DownArr.svg";

const MenuList = ({icon, title, arrow, badge, badgeColor}) => {
    return (
        <div className={styles.menuListItem}>
            <img alt='pic' src={icon} />
            <p>{title}</p>
            {badge? <span style={{backgroundColor:`${badgeColor}`}} className={styles.menuListBadge} >{badge}</span> : <span className={styles.menuListBadge}></span>}
            {arrow? <img alt='pic' className={styles.menuListArrow} src={downArr}/> : null}
        </div>
    );
};

export default MenuList;