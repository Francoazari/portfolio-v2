import clsx from "clsx";
import { useState } from "react";
import styles from "./Navbar.module.scss";

function Navbar() {
    const title = "Franco Azari";
    const menuItem = [
        {
            label: "Home",
            url: "#home"
        },
        {
            label: "About me",
            url: "#aboutme"
        },
        {
            label: "Projects",
            url: "#projects"
        },
        {
            label: "Contact",
            url: "#getintouch"
        }
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        console.log(menuOpen);
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <p>{title.toUpperCase()}</p>

            {menuItem && (
                <>
                    <div className={clsx(styles.hamburguerMenu)} onClick={() => handleClick()}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <ul className={clsx(menuOpen && styles.open)}>
                        {menuItem.map((item, index) => {
                            return (
                                <a key={index} href={item.url}>
                                    <li>{item.label}</li>
                                </a>
                            );
                        })}
                    </ul>
                </>
            )}
        </nav>
    );
}

export default Navbar;
