import { useEffect, useState } from "react";
import { MainContext } from "../../contexts";
import Error from "../Error";
import Loading from "../Loading";
import Portfolio from "../Portfolio";

function Index() {
    const [width, setWidth] = useState(window?.innerWidth);
    const [modalContent, setModalContent] = useState();
    const [languageActive, setLanguageActive] = useState("english");
    const [model, setModel] = useState();
    const [loading, setLoading] = useState();

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

    const getModel = async (modelName) => {
        if (!modelName) return;
        return await fetch(modelName);
    };

    useEffect(() => {
        setLoading(true);
        const modelName = languageActive && model?.nav && model?.nav.languages.find((lang) => lang.id === languageActive).modelId;
        try {
            getModel(`./models/${modelName ?? "english-model"}.json`)
                .then((res) => res.json())
                .then((model) => {
                    setTimeout(() => {
                        setModel(model);
                        setLoading(false);
                    }, 500);
                });
        } catch (error) {
            console.error(error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [languageActive]);

    return (
        <MainContext.Provider value={contextValue}>
            {model && !loading && <Portfolio model={model} />}
            {loading && <Loading />}
            {!model && !loading && <Error />}
        </MainContext.Provider>
    );
}

export default Index;
