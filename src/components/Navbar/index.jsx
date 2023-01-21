import clsx from "clsx";
import styles from "./Navbar.module.scss";
import animatedStyle from "../../styles/animated-element.module.scss";

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

    const handleClick = () => {
        const hamburgerCheckbox = document.querySelector("#hamburger-input");
        hamburgerCheckbox.checked = !hamburgerCheckbox.checked;
    };

    const handleClickCheckbox = () => {
        const body = document.querySelector("body");
        const hamburgerCheckbox = document.querySelector("#hamburger-input");
        body.style.overflow = hamburgerCheckbox.checked ? "hidden" : "auto";
    };

    let lastScroll = 0;
    window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) nav.classList.add(styles.visible);

        if (currentScroll > lastScroll) {
            nav.classList.remove(styles.visible);
        } else if (currentScroll < lastScroll) {
            nav.classList.add(styles.visible);
        }
        lastScroll = currentScroll;
    });

    return (
        <nav className={styles.visible}>
            <p>{title.toUpperCase()}</p>

            {menuItem && (
                <>
                    <input type="checkbox" id="hamburger-input" className={styles.hamburgerCheckbox} onClick={() => handleClickCheckbox()} />
                    <label id="hamburger-menu" htmlFor="hamburger-input">
                        <div className={clsx(styles.hamburgerMenu)}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </label>
                    <ul>
                        {menuItem.map((item, index) => {
                            return (
                                <a
                                    key={index}
                                    href={item.url}
                                    className={clsx(animatedStyle.animatedElement, animatedStyle.order1)}
                                    onClick={() => handleClick()}
                                >
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
