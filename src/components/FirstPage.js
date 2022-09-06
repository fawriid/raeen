import React from "react";

// components
import Main from "./firstPageComponents/main/Main";
import Menu from "./firstPageComponents/menu/Menu";
import Navbar from "./firstPageComponents/navbar/Navbar";

// styles
import styles from "./FirstPage.module.css";

const FirstPage = () => {
    return (
        <div className={styles.firstPage}>
            <div className={styles.Navbar}>
                <Navbar />
            </div>
            <div className={styles.MenuAndMain}>
                <div className={styles.Menu}>
                    <Menu />
                </div>
                <div className={styles.Main}>
                    <Main />
                </div>
            </div>
        </div>
    );
};

export default FirstPage;
