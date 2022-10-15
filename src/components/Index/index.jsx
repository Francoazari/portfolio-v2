import { useState } from "react";
import IntroAnimation from "../IntroAnimation";
import Portfolio from "../Portfolio";
import styles from "./Index.module.scss";

function Index() {
    const [introFinished, setIntroFinished] = useState(false);

    return (
        <>
            <div className={styles.container}>
                {!introFinished && <IntroAnimation introFinished={setIntroFinished} />}
                {introFinished && <Portfolio />}
            </div>
        </>
    );
}

export default Index;
