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
import ReadMore from "../ReadMore";

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

                    {model?.main && (
                        <div className={styles.headingContainer}>
                            {model.main.firstLine && <span className={clsx(animatedStyle.animatedElement, animatedStyle.order2)}>{model.main.firstLine}</span>}
                            {model.main.secondLine && (
                                <h1 className={clsx(animatedStyle.animatedElement, animatedStyle.order3)}>{model.main.secondLine.toUpperCase()}</h1>
                            )}
                            {model.main.thirdLine && <span className={clsx(animatedStyle.animatedElement, animatedStyle.order4)}>{model.main.thirdLine}</span>}
                        </div>
                    )}

                    <svg className={styles.arrow} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M3.81 4.38 8 8.57l4.19-4.19 1.52 1.53L8 11.62 2.29 5.91l1.52-1.53z" />
                    </svg>
                </section>

                {model?.aboutMe && (
                    <section id="aboutme" className={clsx(styles.aboutMe, "scroll-content", styles.fadeTop)}>
                        <h2>{model.aboutMe.title ?? "ABOUT ME"}</h2>
                        <div className={styles.information}>
                            {model.aboutMe.image?.url && (
                                <div>
                                    <img className={styles.image} src={model.aboutMe.image.url} alt={model.aboutMe.image.alternativeText} />
                                </div>
                            )}
                            <ReadMore>{model.aboutMe.paragraph}</ReadMore>

                            {/* {model.aboutMe.paragraph && typeof model.aboutMe.paragraph === "string" && <ReadMore>{model.aboutMe.paragraph}</ReadMore>}
                            {model.aboutMe.paragraph &&
                                typeof model.aboutMe.paragraph != "string" &&
                                model.aboutMe.paragraph.map((text, key) => <ReadMore key={key}>{text}</ReadMore>)} */}
                        </div>
                    </section>
                )}

                {model?.experiences?.experience && (
                    <section id="experience" className={clsx(styles.experience, "scroll-content", styles.fadeTop)}>
                        <h2>{model.experiences.title ?? "EXPERIENCE"}</h2>
                        <ul className={styles.experienceList}>
                            {model.experiences.experience.map((experience, index) => {
                                return <ExperienceCard key={index} order={index} experienceInformation={experience} />;
                            })}
                        </ul>
                    </section>
                )}

                {model?.certificates?.images && (
                    <section id="certificates" className={clsx(styles.certificate, "scroll-content", styles.fadeTop)}>
                        <h2>{model.certificates.title ?? "CERTIFICATES"}</h2>
                        <div className={styles.slider}>
                            <Splide
                                options={{
                                    rewind: true,
                                    type: "fade"
                                }}
                                aria-label="Certificates"
                            >
                                {model.certificates.images.map((certificate, key) => {
                                    if (!certificate.url) return false;
                                    return (
                                        <SplideSlide key={key}>
                                            <img src={certificate.url} alt={certificate.alternativeText ?? ""} />
                                        </SplideSlide>
                                    );
                                })}
                            </Splide>
                        </div>
                    </section>
                )}

                {model?.projects?.project && model?.projects?.project.length > 0 && (
                    <section id="projects" className={clsx(styles.works, "scroll-content", styles.fadeTop)}>
                        <h2>{model.projects.title ?? "PROJECTS"}</h2>
                        <div className={styles.projectContainer}>
                            {model?.projects?.project.map((project, index) => {
                                return <ProjectCard key={index} projectInformation={project} />;
                            })}
                        </div>
                    </section>
                )}

                {model?.getInTouch && (
                    <section id="getintouch" className={clsx(styles.getInTouch, "scroll-content", styles.fadeTop)}>
                        <h2>{model.getInTouch.title ?? "GET IN TOUCH"}</h2>
                        <div className={styles.container}>
                            {model.getInTouch.paragraph && <p>{model.getInTouch.paragraph}</p>}
                            <ContactForm />
                        </div>
                    </section>
                )}
            </main>

            <Footer information={model?.footer} />

            {(modalContent || hasTransitionedIn) && <Modal />}
        </>
    );
}

export default Portfolio;
