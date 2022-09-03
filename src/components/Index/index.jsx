import { useState } from "react";
import IntroAnimation from "../IntroAnimation";
import styles from "./Index.module.scss";

function Index() {
    const [introFinished, setIntroFinished] = useState(false);

    return (
        <div className={styles.container}>
            {!introFinished && <IntroAnimation introFinished={setIntroFinished} />}
            {introFinished && "hola"}
        </div>
    );
}

export default Index;
