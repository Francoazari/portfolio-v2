import { useEffect, useState } from "react";
import { MainContext } from "../../contexts";
import Portfolio from "../Portfolio";

function Index() {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    const isMobile = width < 768;
    const isDesktop = width >= 768;

    const contextValue = {
        isMobile,
        isDesktop
    };

    return (
        <MainContext.Provider value={contextValue}>
            <Portfolio />
        </MainContext.Provider>
    );
}

export default Index;
