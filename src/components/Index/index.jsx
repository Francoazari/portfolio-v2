import { useEffect, useState } from "react";
import { MainContext } from "../../contexts";
import Portfolio from "../Portfolio";

function Index() {
    const [width, setWidth] = useState(window.innerWidth);
    const [modalContent, setModalContent] = useState();

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    const isMobile = width < 600;
    const isTablet = width >= 600 && width < 768;
    const isDesktop = width >= 768;

    const contextValue = {
        isMobile,
        isTablet,
        isDesktop,
        modalContent,
        setModalContent
    };

    return (
        <MainContext.Provider value={contextValue}>
            <Portfolio />
        </MainContext.Provider>
    );
}

export default Index;
