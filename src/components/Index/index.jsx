import { useEffect, useState } from "react";
import { MainContext } from "../../contexts";
import Error from "../Error";
import Loading from "../Loading";
import Portfolio from "../Portfolio";

function Index() {
    const [width, setWidth] = useState(window?.innerWidth);
    const [modalContent, setModalContent] = useState();
    const [languageActive, setLanguageActive] = useState("spanish");
    const [model, setModel] = useState();
    const [loading, setLoading] = useState(true);

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

    const contextValue = { isMobile, isTablet, isDesktop, isLocalhost, modalContent, setModalContent, languageActive, setLanguageActive };

    useEffect(() => {
        try {
            fetch("./models/model.json")
                .then((res) => res.json())
                .then((model) => {
                    setTimeout(() => {
                        setModel(model);
                        setLoading(false);
                    }, 1000);
                });
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <MainContext.Provider value={contextValue}>
            {model && <Portfolio model={model} />}
            {!model && loading && <Loading />}
            {!model && !loading && <Error />}
        </MainContext.Provider>
    );
}

export default Index;
