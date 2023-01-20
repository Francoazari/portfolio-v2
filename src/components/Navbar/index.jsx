import clsx from "clsx";
//import { useState } from "react";
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

    // const [menuOpen, setMenuOpen] = useState(false);

    // const handleClick = () => {
    //     setMenuOpen(!menuOpen);
    // };

    let lastScroll = 0;
    window.addEventListener("scroll", () => {
        let nav = document.querySelector("nav");
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll) {
            nav.classList.remove(styles.visible);
        } else if (currentScroll < lastScroll) {
            nav.classList.add(styles.visible);
        }
        lastScroll = currentScroll;
    });

    return (
        <nav>
            <p>{title.toUpperCase()}</p>

            {menuItem && (
                <>
                    <input type="checkbox" id="hamburger-input" class={styles.hamburgerCheckbox} />
                    <label id="hamburger-menu" for="hamburger-input">
                        <div className={clsx(styles.hamburgerMenu)}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </label>
                    <ul>
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
