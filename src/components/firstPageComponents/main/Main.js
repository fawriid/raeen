import React, { useEffect, useState } from "react";

// styles
import styles from "./Main.module.css";

// components
import Notifications from "../../shared/notifications/Notifications";

const Main = () => {
    const notifications = [
        {
            content: "“Username “ Made a payment for “BlackSwan”",
            date: "10 min ago",
            close: true,
            newN: true,
        },
        {
            content: "“Username “ Rejected your invoice for  “BlackSwan”z",
            date: "10 min ago",
            close: false,
            newN: true,
        },
        {
            content: "“BlackSwan” is minted ",
            date: "11 - 05 - 2022",
            close: false,
            newN: true,
        },
    ];

    const [isNew, setIsNew] = useState(false);
    const [newNotifications, setNewNotifications] = useState();

    useEffect(() => {
        const newNotif = notifications.filter((notif) => notif.newN == true);
        if (newNotif.length > 0) {
            setIsNew(true);
            setNewNotifications(newNotif);
        } else {
            console.log("null");
        }
    }, []);

    return (
        <div className={styles.main}>
            <div className={styles.mainTitle}>
                <span className={styles.titleCir}> </span>
                <h5>Notification</h5>
            </div>
            <div className={styles.notificationSection}>
                <section className={styles.newNotiSection}>
                    {isNew && (
                        <div>
                            <div className={styles.newNotifBadge}>
                                <span>New</span>
                            </div>
                            {newNotifications &&
                                newNotifications.map(({content,date,close}) => (
                                    <Notifications content={content} date={date} close={close} />
                                ))}
                        </div>
                    )}
                </section>
                <section className={styles.notifSection}>
                    {notifications.length > 0 && (
                        <div>
                            <div className={styles.notifBadge}>
                                <span>All</span>
                            </div>
                            {notifications.map(({content,date,close}) => (
                                <Notifications content={content} date={date} close={close} />
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Main;
