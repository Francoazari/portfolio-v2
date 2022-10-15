import styles from "./IntroAnimation.module.scss";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Particles from "spark-particles";

function IntroAnimation({ introFinished }) {
    const [introEnd, setIntroEnd] = useState(false);

    const handleClick = () => {
        setIntroEnd(true);

        setTimeout(function () {
            introFinished(true);
        }, 500);
    };

    useEffect(() => {
        const node = document.getElementById("particles");
        new Particles(node)
            .init({
                // enable debug mode
                debug: false,
                // auto resize to fit the screen
                resize: true,
                // config particles here
                particles: {
                    amount: 250,
                    moveDirection: "random", // 'random' | 'top'  | 'right'  | 'bottom'  | 'left'
                    distanceToLink: 150,
                    linkedParticles: true,
                    maxVelocity: 0.8,
                    maxRadius: 4
                },
                // rendered configs
                renderer: {
                    backgroundColor: "#186cb6",
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 1,
                        y2: 1,
                        color1: "#0a192f",
                        color2: "#0a192f"
                    },
                    width: window.innerWidth,
                    height: window.innerHeight,
                    dpiMultiplier: 1
                }
            })
            .start();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <canvas id="particles" className={clsx({ [styles.hideCanvas]: introEnd })}></canvas>
                <div className={styles.container}>
                    <div
                        className={clsx({
                            [styles.centralInformation]: true,
                            [styles.centralInformationHide]: introEnd
                        })}
                    >
                        <div className={styles.information}>
                            <span className={styles.portfolio}>PORTFOLIO</span>
                            <span className={styles.title}>FRANCO AZARI</span>
                        </div>
                        <div className={styles.buttonClickHere} onClick={() => handleClick()}>
                            <span>CLICK HERE</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroAnimation;
