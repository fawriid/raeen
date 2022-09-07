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
                            arrow
                            badge={badge}
                            badgeColor={badgeColor}
                        />
                    )
                )}
            </ul>
        </div>
    );
};

export default Menu;
