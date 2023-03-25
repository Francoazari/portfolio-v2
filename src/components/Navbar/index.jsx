import clsx from "clsx";
import styles from "./Navbar.module.scss";
import animatedStyle from "../../styles/animated-element.module.scss";
import { useContext, useRef } from "react";
import { MainContext } from "../../contexts";

function Navbar({ information }) {
    const { isTablet, isDesktop, languageActive, setLanguageActive } = useContext(MainContext);
    const languageRef = useRef();

    const handleClick = (event) => {
        if (isDesktop || isTablet) return;
        const body = document.querySelector("body");
        const hamburgerCheckbox = document.querySelector("#hamburger-input");

        if (event.target.id !== "hamburger-input") hamburgerCheckbox.checked = !hamburgerCheckbox.checked;
        body.style.overflow = hamburgerCheckbox.checked ? "hidden" : "auto";
    };

    let lastScroll = 0;
    window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && lastScroll > 0 && currentScroll > 0) {
            nav.classList.remove(styles.visible);
            if (languageRef?.current && languageRef.current.checked) languageRef.current.checked = false;
        } else if (currentScroll < lastScroll || lastScroll === 0 || currentScroll === 0) {
            nav.classList.add(styles.visible);
        }
        lastScroll = currentScroll;
    });

    return (
        <nav className={styles.visible}>
            {information.title && <p>{information.title.toUpperCase()}</p>}

            {information.menu && (
                <>
                    <input type="checkbox" id="hamburger-input" className={styles.hamburgerCheckbox} onClick={(e) => handleClick(e)} />
                    <label id="hamburger-menu" htmlFor="hamburger-input">
                        <div className={clsx(styles.hamburgerMenu)}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </label>
                    <ul>
                        {information.menu.map((item, index) => {
                            return (
                                <a
                                    key={index}
                                    href={item.url}
                                    className={clsx(animatedStyle.animatedElement, animatedStyle.order1)}
                                    onClick={(e) => handleClick(e)}
                                >
                                    <li>{item.label}</li>
                                </a>
                            );
                        })}

                        {information.languages && (
                            <li className={clsx(styles.languages, animatedStyle.animatedElement, animatedStyle.order1)}>
                                <input type="checkbox" id="language-checkbox" className={styles.languageCheckbox} ref={languageRef} />
                                <label htmlFor="language-checkbox" className={styles.languageLabel}>
                                    {information.languages.find((lang) => lang.id === languageActive)?.symbol ??
                                        information.languages.find((lang) => lang.default)?.symbol ??
                                        information.languages[0].symbol}
                                </label>
                                <ul className={styles.languagesDropdown}>
                                    {information.languages.map((language, key) => {
                                        return (
                                            <li
                                                className={clsx({ [styles.active]: language.id === languageActive })}
                                                key={key}
                                                onClick={() => setLanguageActive(language.id)}
                                            >
                                                <span>{language.label}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                        )}
                    </ul>
                </>
            )}
        </nav>
    );
}

export default Navbar;
