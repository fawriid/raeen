import React from "react";

// styles
import styles from "./Navbar.module.css";

// icons
import menuIcon from "../../../icons/MenuNav.svg";
import downArr from "../../../icons/DownArr.svg";
import searchIcon from '../../../icons/Search.svg'
import notification from '../../../icons/Notification.svg'

// images 
import profile from '../../../images/Picture.svg'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.first}>
                <img src={menuIcon} />
                <div>
                    <div>
                        <span className={styles.collectionCir}> </span>
                        <p>Collections</p>
                    </div>
                    <img src={downArr} />
                </div>
            </div>
            <div className={styles.second}>
                <div className={styles.inputContainer}>
                    <button className={styles.searchBtn}><img src={searchIcon} /></button>
                    <input type='text' placeholder="Search Echo's collection" />
                </div>
            </div>
            <div className={styles.third}>
                <img src={notification} />
                <div>
                    <div>
                    <img src={profile} />
                    <span>Mohamad Rasouli</span>
                    </div>
                    <img src={downArr} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
