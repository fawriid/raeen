import React from 'react';

// style
import styles from './Notifications.module.css'

// icon
import closeIcon from '../../../icons/Close.svg'

const notifications = ({content, date, close}) => {
    return (
        <div className={styles.notification}>
            {content}
            <div>
                <span>{date}</span>
                {close && <button><img src={closeIcon} alt='pic'/></button>}
            </div>
        </div>
    );
};

export default notifications;