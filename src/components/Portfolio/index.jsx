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
            <Navbar information={model.nav} languages={model.system?.languages} />

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
                        <h2>
                            <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
                            </svg>
                            {model.aboutMe.title ?? "ABOUT ME"}
                        </h2>
                        <div className={styles.information}>
                            {model.aboutMe.image?.url && (
                                <div>
                                    <img className={styles.image} src={model.aboutMe.image.url} alt={model.aboutMe.image.alternativeText} />
                                </div>
                            )}
                            <ReadMore localization={model?.system?.localization}>{model.aboutMe.paragraph}</ReadMore>
                        </div>
                    </section>
                )}

                {model?.experiences?.experience && (
                    <section id="experience" className={clsx(styles.experience, "scroll-content", styles.fadeTop)}>
                        <h2>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path
                                    d="M6.5,17h9.55c0.245,1.694,1.688,3,3.45,3s3.205-1.306,3.45-3h2.55c1.223,0,2.239-0.884,2.454-2.046
	C29.67,14.729,31,13.277,31,11.5s-1.33-3.229-3.046-3.454C27.739,6.884,26.723,6,25.5,6h-6.55c-0.245-1.694-1.688-3-3.45-3
	s-3.205,1.306-3.45,3H9.95C9.705,4.306,8.262,3,6.5,3C4.567,3,3,4.567,3,6.5S4.567,10,6.5,10c1.762,0,3.205-1.306,3.45-3h2.101
	c0.245,1.694,1.688,3,3.45,3s3.205-1.306,3.45-3h6.55c0.672,0,1.236,0.447,1.426,1.058C25.268,8.333,24,9.764,24,11.5
	s1.268,3.167,2.926,3.442C26.736,15.553,26.172,16,25.5,16h-2.55c-0.245-1.694-1.688-3-3.45-3s-3.205,1.306-3.45,3H6.5
	c-1.223,0-2.239,0.884-2.454,2.046C2.33,18.271,1,19.723,1,21.5s1.33,3.229,3.046,3.454C4.261,26.116,5.277,27,6.5,27h2.55
	c0.245,1.694,1.688,3,3.45,3s3.205-1.306,3.45-3h6.101c0.245,1.694,1.688,3,3.45,3c1.933,0,3.5-1.567,3.5-3.5S27.433,23,25.5,23
	c-1.762,0-3.205,1.306-3.45,3H15.95c-0.245-1.694-1.688-3-3.45-3s-3.205,1.306-3.45,3H6.5c-0.672,0-1.236-0.447-1.426-1.058
	C6.732,24.667,8,23.236,8,21.5s-1.268-3.167-2.926-3.442C5.264,17.447,5.828,17,6.5,17z M6.5,8C5.673,8,5,7.327,5,6.5S5.673,5,6.5,5
	S8,5.673,8,6.5S7.327,8,6.5,8z M15.5,8C14.673,8,14,7.327,14,6.5S14.673,5,15.5,5S17,5.673,17,6.5S16.327,8,15.5,8z M26,11.5
	c0-0.827,0.673-1.5,1.5-1.5s1.5,0.673,1.5,1.5S28.327,13,27.5,13S26,12.327,26,11.5z M19.5,15c0.827,0,1.5,0.673,1.5,1.5
	S20.327,18,19.5,18S18,17.327,18,16.5S18.673,15,19.5,15z M25.5,25c0.827,0,1.5,0.673,1.5,1.5S26.327,28,25.5,28S24,27.327,24,26.5
	S24.673,25,25.5,25z M12.5,25c0.827,0,1.5,0.673,1.5,1.5S13.327,28,12.5,28S11,27.327,11,26.5S11.673,25,12.5,25z M6,21.5
	C6,22.327,5.327,23,4.5,23S3,22.327,3,21.5S3.673,20,4.5,20S6,20.673,6,21.5z"
                                />
                            </svg>
                            {model.experiences.title ?? "EXPERIENCE"}
                        </h2>
                        <ul className={styles.experienceList}>
                            {model.experiences.experience.map((experience, index) => {
                                return <ExperienceCard key={index} order={index} experienceInformation={experience} />;
                            })}
                        </ul>
                    </section>
                )}

                {model?.certificates?.images && (
                    <section id="certificates" className={clsx(styles.certificate, "scroll-content", styles.fadeTop)}>
                        <h2>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 1v18h-3v-1h2V2H2v16h8v1H1V1zm-7 2H8v1h8zm-2 3V5h-4v1zm-7 5H3v1h4zm0 2H3v1h4zm-4 3h2v-1H3zm14-3a2 2 0 1 1-2-2 2.002 2.002 0 0 1 2 2zm-1 0a1 1 0 1 0-1 1 1.001 1.001 0 0 0 1-1zm.002-4.293a.965.965 0 0 0 1.32.55 1.08 1.08 0 0 1 1.213.207 1.066 1.066 0 0 1 .21 1.21.966.966 0 0 0 .548 1.324 1.064 1.064 0 0 1 0 2.004.965.965 0 0 0-.549 1.323A1.05 1.05 0 0 1 18 16.816v7.046l-3-2.538-3 2.538v-7.046a1.05 1.05 0 0 1-.744-1.49.965.965 0 0 0-.549-1.324 1.064 1.064 0 0 1 0-2.004.966.966 0 0 0 .549-1.324 1.066 1.066 0 0 1 .209-1.21 1.08 1.08 0 0 1 1.212-.206.965.965 0 0 0 1.32-.551 1.064 1.064 0 0 1 2.005 0zm.998 13v-5.04a.93.93 0 0 0-.998.625 1.064 1.064 0 0 1-2.004 0 .93.93 0 0 0-.998-.625v5.039l2-1.692zm-1.94-4.749a1.967 1.967 0 0 1 1.853-1.308 2.12 2.12 0 0 1 .87.197l.058-.091a1.964 1.964 0 0 1 1.116-2.695v-.122a1.966 1.966 0 0 1-1.116-2.695l-.087-.084a1.965 1.965 0 0 1-2.694-1.117h-.12a1.965 1.965 0 0 1-2.694 1.117l-.087.084a1.966 1.966 0 0 1-1.116 2.695v.122a1.964 1.964 0 0 1 1.116 2.695l.058.09a2.12 2.12 0 0 1 .87-.196 1.967 1.967 0 0 1 1.853 1.308L15 17z" />
                                <path fill="none" d="M0 0h24v24H0z" />
                            </svg>
                            {model.certificates.title ?? "CERTIFICATES"}
                        </h2>
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
                        <h2>
                            <svg version="1.1" viewBox="0 0 400 400">
                                <g transform="translate(0 -652.36)">
                                    <path
                                        d="m237.43 701.86v40h-186v49.691h-51.43v211.31h400v-300-1h-137.57zm25 25h112.57v251h-50v-185.42h-0.1621v-0.8886h-248.41v-24.691l186 0.9453z"
                                        strokeWidth="25"
                                    >
                                        <title>folder</title>
                                    </path>
                                </g>
                            </svg>

                            {model.projects.title ?? "PROJECTS"}
                        </h2>
                        <div className={styles.projectContainer}>
                            {model?.projects?.project.map((project, index) => {
                                return <ProjectCard key={index} projectInformation={project} />;
                            })}
                        </div>
                    </section>
                )}

                {model?.getInTouch && (
                    <section id="getintouch" className={clsx(styles.getInTouch, "scroll-content", styles.fadeTop)}>
                        <h2>
                            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 36 36">
                                <path d="M8,19V11H5a3,3,0,0,0-3,3V32a1,1,0,0,0,.56.89,1,1,0,0,0,1-.1L8.71,29H22.15A2.77,2.77,0,0,0,25,26.13V25H14A6,6,0,0,1,8,19Z"></path>
                                <path d="M31,4H14a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3H27.55l4.78,3.71a1,1,0,0,0,1,.11,1,1,0,0,0,.57-.9V7A3,3,0,0,0,31,4Z"></path>
                                <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
                            </svg>
                            {model.getInTouch.title ?? "GET IN TOUCH"}
                        </h2>
                        <div className={styles.container}>
                            {model.getInTouch.paragraph && <p>{model.getInTouch.paragraph}</p>}
                            <ContactForm localization={model?.getInTouch?.form} />
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
