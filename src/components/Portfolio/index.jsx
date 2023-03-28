import clsx from "clsx";
import { useContext, useEffect } from "react";
import { MainContext } from "../../contexts";
import ExperienceCard from "../ExperienceCard";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ProjectCard from "../ProjectCard";
import styles from "./Portfolio.module.scss";
import animatedStyle from "../../styles/animated-element.module.scss";
import Modal from "../Modal";
import useMountTransition from "../../hooks/useMountTransition";
import ContactForm from "../ContactForm";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Portfolio({ model }) {
    const { isTablet, isDesktop, modalContent } = useContext(MainContext);
    const hasTransitionedIn = useMountTransition(!!modalContent, 250);

    window.addEventListener("scroll", function () {
        let elements = document.getElementsByClassName("scroll-content");
        let screenSize = window.innerHeight;

        for (var i = 0; i < elements.length; i++) {
            let element = elements[i];

            if (element.getBoundingClientRect().top < screenSize) {
                element.classList.add(styles.visible);
            } else {
                element.classList.remove(styles.visible);
            }
        }
    });

    useEffect(() => {
        document.body.style.overflowY = modalContent ? "hidden" : "auto";
    }, [modalContent]);

    return (
        <>
            <Navbar information={model.nav} />

            <main>
                <section id="home" className={clsx(styles.firstScreen)}>
                    <img src={isDesktop || isTablet ? "./assets/background-desktop.jpg" : "./assets/background-mobile.jpg"} alt="Background section" />

                    <div className={styles.headingContainer}>
                        <span className={clsx(animatedStyle.animatedElement, animatedStyle.order2)}>Hello, my name is</span>
                        <h1 className={clsx(animatedStyle.animatedElement, animatedStyle.order3)}>{model?.name.toUpperCase()}</h1>
                        <span className={clsx(animatedStyle.animatedElement, animatedStyle.order4)}>Nice to meet you!</span>
                    </div>

                    <svg className={styles.arrow} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M3.81 4.38 8 8.57l4.19-4.19 1.52 1.53L8 11.62 2.29 5.91l1.52-1.53z" />
                    </svg>
                </section>

                <section id="aboutme" className={clsx(styles.aboutMe, "scroll-content", styles.fadeTop)}>
                    <h2>ABOUT ME</h2>
                    <div className={styles.information}>
                        <div className={styles.image}>{/* <img src={} alt={} /> */}</div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi enim laboriosam optio velit earum! Rem ipsa repudiandae corrupti,
                            debitis iste sequi quam similique necessitatibus ullam distinctio repellat? Laboriosam, nemo ipsum. Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Dignissimos esse nihil ratione quis odit doloremque aspernatur! Provident asperiores, qui inventore,
                            rerum assumenda cumque reprehenderit voluptate alias, distinctio corporis nam numquam!
                        </p>
                    </div>
                </section>

                {model?.experiences && (
                    <section className={clsx(styles.experience, "scroll-content", styles.fadeTop)}>
                        <h2>EXPERIENCE</h2>
                        <ul className={styles.experienceList}>
                            {model?.experiences.map((experience, index) => {
                                return <ExperienceCard key={index} order={index} experienceInformation={experience} />;
                            })}
                        </ul>
                    </section>
                )}

                {model?.certificates && (
                    <section className={styles.certificate}>
                        <h2>CERTIFICATES</h2>
                        <Splide
                            options={{
                                rewind: true,
                                type: "fade"
                            }}
                            aria-label="Certificates"
                        >
                            {model?.certificates.map((certificate, key) => {
                                if (!certificate.url) return false;
                                return (
                                    <SplideSlide key={key}>
                                        <img src={certificate.url} alt={certificate.alternativeText ?? ""} />
                                    </SplideSlide>
                                );
                            })}
                        </Splide>
                    </section>
                )}

                {model?.projects && model?.projects.length > 0 && (
                    <section id="projects" className={clsx(styles.works, "scroll-content", styles.fadeTop)}>
                        <h2>PROJECTS</h2>
                        <div className={styles.projectContainer}>
                            {model?.projects.map((project, index) => {
                                return <ProjectCard key={index} projectInformation={project} />;
                            })}
                        </div>
                    </section>
                )}

                <section id="getintouch" className={clsx(styles.getInTouch, "scroll-content", styles.fadeTop)}>
                    <h2>GET IN TOUCH</h2>
                    <ContactForm />
                </section>
            </main>

            <Footer information={model?.footer} />

            {(modalContent || hasTransitionedIn) && <Modal />}
        </>
    );
}

export default Portfolio;
