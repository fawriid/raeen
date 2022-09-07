import React from "react";

// styles
import styles from "./Navbar.module.css";

// icons
import menuIcon from "../../../icons/MenuNav.svg";
import menuIconRes from "../../../icons/MenuNavRes.svg";
import downArr from "../../../icons/DownArr.svg";
import searchIcon from '../../../icons/Search.svg'
import searchResIcon from '../../../icons/SearchRes.svg'
import notification from '../../../icons/Notification.svg'
import notificationRes from '../../../icons/NotificationRes.svg'

// images 
import profile from '../../../images/Picture.svg'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.first}>
                <img className={styles.navbarCollIcon} alt="pic" src={menuIcon} />
                <img className={styles.navbarCollIconRes} alt="pic" src={menuIconRes} />
                <div>
                    <div>
                        <span className={styles.collectionCir}> </span>
                        <p>Collections</p>
                    </div>
                    <img alt="pic" className={styles.collectionArr} src={downArr} />
                </div>
                <div className={styles.echoLabTitRes}>
                    <p>Echo lab's Collection</p>
                </div>
            </div>
            <div className={styles.second}>
                <div className={styles.inputContainer}>
                    <button className={styles.searchBtn}><img alt="pic" src={searchIcon} /></button>
                    <input type='text' placeholder="Search Echo's collection" />
                </div>
                <button className={styles.searchBtnRes}><img alt="pic" src={searchResIcon} /></button>
            </div>
            <div className={styles.third}>
                <img alt="pic" src={notification} className={styles.navbarNot}/>
                <img alt="pic" src={notificationRes} className={styles.navbarNotRes}/>
                <div>
                    <div>
                    <img  alt="pic" src={profile} />
                    <span className={styles.navbarProfileName}>Mohamad Rasouli</span>
                    </div>
                    <img className={styles.profileArr} alt="pic" src={downArr} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
