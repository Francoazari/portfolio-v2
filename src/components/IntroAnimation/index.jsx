import styles from "./IntroAnimation.module.scss";
import clsx from "clsx";
import { useState } from "react";

function IntroAnimation() {
    let [introEnd, setIntroEnd] = useState(false);

    const handleClick = () => {
        setIntroEnd(true);
        //const title = document.getAnimations;
    };

    return (
        <div className={styles.container}>
            <div
                className={clsx({
                    [styles.linesTop]: true,
                    [styles.linesTopAppear]: !introEnd,
                    [styles.linesTopDissapear]: introEnd
                })}
            >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div
                className={clsx({
                    [styles.centralInformation]: true,
                    [styles.centralInformationDissapear]: introEnd
                })}
            >
                <span className={styles.title}>FRANCO AZARI</span>
                <div className={styles.buttonClickHere} onClick={() => handleClick()}>
                    <span>CLICK HERE</span>
                </div>
            </div>
            <div
                className={clsx({
                    [styles.linesBottom]: true,
                    [styles.linesBottomAppear]: !introEnd,
                    [styles.linesBottomDissapear]: introEnd
                })}
            >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default IntroAnimation;
