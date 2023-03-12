import { useEffect, useState } from "react";
import { MainContext } from "../../contexts";
import Portfolio from "../Portfolio";

function Index() {
    const [width, setWidth] = useState(window?.innerWidth);
    const [modalContent, setModalContent] = useState();
    const [model, setModel] = useState();

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
    const isLocalhost = window.location.hostname.includes("localhost") || window.location.hostname.includes("127.0.0.1");

    const contextValue = { isMobile, isTablet, isDesktop, isLocalhost, modalContent, setModalContent };

    useEffect(() => {
        try {
            fetch("./models/model.json")
                .then((res) => res.json())
                .then((model) => {
                    setModel(model);
                });
        } catch (error) {
            console.error(error);
        }
    }, []);

    return <MainContext.Provider value={contextValue}>{model && <Portfolio model={model} />}</MainContext.Provider>;
}

export default Index;
