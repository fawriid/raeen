import React from "react";

// styles
import styles from "./Menu.module.css";

// components
import MenuList from "../../shared/menuList/MenuList";

// icons
import dashboard from "../../../icons/Dashboard.svg";
import artwork from "../../../icons/Artwork.svg";
import orders from "../../../icons/Orders.svg";
import contacts from "../../../icons/Contacts.svg";
import inquries from "../../../icons/Inquries.svg";
import echolab from "../../../icons/Echolab.svg";
    // icons > app section
import channels1 from '../../../icons/Channels1.svg'
import channels2 from '../../../icons/Channels2.svg'
import channels3 from '../../../icons/Channels3.svg'
import plus from '../../../icons/Plus.svg'
import rightArr from '../../../icons/RightArr.svg'


const Menu = () => {
    const menuList = [
        {
            icon:echolab,
            title:'Echo lab',
            arrow:true
        },
        { icon: dashboard, title: "Dashboard",arrow:true },
        {
            icon: artwork,
            title: "Artwork",
            arrow: true,
            badge: 4,
            badgeColor: "#fed6cc",
        },
        {
            icon:orders,
            title:'Orders',
            arrow:true,
        },{
            icon:contacts,
            title:'Contacts',
            arrow:true,
        },
        {
            icon:inquries,
            title:'Inquries',
            arrow:true,
            badge:4,
            badgeColor:'#A6E9DE'
        }
    ];

    return (
        <div className={styles.menu}>
            <ul>
                {menuList.map(
                    ({ icon, title, arrow, badge, badgeColor }, index) => (
                        <MenuList
                            key={index}
                            icon={icon}
                            title={title}
                            arrow={arrow}
                            badge={badge}
                            badgeColor={badgeColor}
                        />
                    )
                )}
            </ul>
            <div className={styles.appSection}>
                <div>
                    <p>Apps</p>
                    <button><img src={plus} alt='pic' /></button>
                </div>
                <ul>
                    <li>
                        <img src={channels1} alt='pic' />
                        <p>Websites</p>
                    </li>
                    <li>
                        <img src={channels2} alt='pic' />
                        <p>Minto</p>
                    </li>
                    <li>
                        <img src={channels3} alt='pic' />
                        <p>Artman</p>
                    </li>
                </ul>
                <button>View all apps <img src={rightArr} alt='pic' /></button>
            </div>
        </div>
    );
};

export default Menu;
