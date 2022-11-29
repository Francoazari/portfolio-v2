import styles from "./Navbar.module.scss";

function Navbar() {
    const title = "Franco Azari";
    const menuItem = [
        {
            label: "Home",
            url: "/"
        },
        {
            label: "About me",
            url: "/"
        },
        {
            label: "Projects",
            url: "/"
        },
        {
            label: "Contact asd",
            url: "/"
        }
    ];

    return (
        <nav>
            <p>{title.toUpperCase()}</p>

            {menuItem && (
                <ul>
                    {menuItem.map((item, index) => {
                        return (
                            <a key={index} href={item.url}>
                                <li>{item.label}</li>
                            </a>
                        );
                    })}
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
