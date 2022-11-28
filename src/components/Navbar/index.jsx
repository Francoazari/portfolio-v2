import "./Navbar.module.scss";

function Navbar() {
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
            label: "Portfolio",
            url: "/"
        },
        {
            label: "Contact",
            url: "/"
        }
    ];

    return (
        <nav>
            <p>FRANCO AZARI</p>

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
