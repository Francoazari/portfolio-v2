import { useEffect, useState } from "react";
import { MainContext } from "../../contexts";
import IntroAnimation from "../IntroAnimation";
import Portfolio from "../Portfolio";
import styles from "./Index.module.scss";

function Index() {
    const [introFinished, setIntroFinished] = useState(false);
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
            <div className={styles.container}>
                {!introFinished && <IntroAnimation introFinished={setIntroFinished} />}
                {introFinished && <Portfolio />}
            </div>
        </MainContext.Provider>
    );
}

export default Index;
