import "./Navbar.module.scss";

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
