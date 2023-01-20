import clsx from "clsx";
import { useState, useEffect } from "react";
import ExperienceCard from "../ExperienceCard";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ProjectCard from "../ProjectCard";
import styles from "./Portfolio.module.scss";

function Portfolio() {
    let nombre = "Franco Azari";

    const experiences = [
        {
            heading: "Experience 1",
            period: "Enero 2022 - Present",
            paragraph:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse mollitia aliquid minus sit iusto architecto recusandae non consectetur doloribus, harum dignissimos, deserunt accusantium? Possimus, explicabo reiciendis illo minima non blanditiis!",
            skills: ["HTML", "CSS", "React"]
        },
        {
            heading: "Experience 2",
            period: "Junio 2020 - Diciembre 2022",
            paragraph:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse mollitia aliquid minus sit iusto architecto recusandae non consectetur doloribus, harum dignissimos, deserunt accusantium? Possimus, explicabo reiciendis illo minima non blanditiis!",
            skills: ["HTML", "CSS", "SASS", "React"]
        },
        {
            heading: "Experience 3",
            period: "Abril 2019 - Mayo 2020",
            paragraph:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse mollitia aliquid minus sit iusto architecto recusandae non consectetur doloribus, harum dignissimos, deserunt accusantium? Possimus, explicabo reiciendis illo minima non blanditiis!",
            skills: ["HTML", "CSS", "SASS", "React"]
        }
    ];

    const projects = [
        {
            title: "Project 1",
            paragraph: "Paragraph paragraph  paragraph paragraph paragraph",
            skillTags: ["HTML", "CSS", "JAVASCRIPT"],
            worksLinks: [
                {
                    url: "http://github.com",
                    image: "./assets/works/github.svg",
                    alternativeText: "Github Alternative Text",
                    label: "Github"
                },
                {
                    url: "http://linkedin.com",
                    image: "./assets/works/linkedin.svg",
                    alternativeText: "LinkedIn Alternative Text",
                    label: "Github"
                }
            ]
        },
        {
            title: "Project 2",
            paragraph: "Paragraph paragraph  paragraph paragraph paragraph",
            skillTags: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
            worksLinks: [
                {
                    url: "http://github.com",
                    image: "./assets/works/github.svg",
                    alternativeText: "Github Alternative Text",
                    label: "Github"
                },
                {
                    url: "http://twitter.com",
                    image: "./assets/works/twitter.svg",
                    alternativeText: "Twitter Alternative Text",
                    label: "Github"
                }
            ]
        },
        {
            title: "Project 3",
            paragraph: "Paragraph paragraph  paragraph paragraph paragraph",
            skillTags: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
            worksLinks: [
                {
                    url: "http://github.com",
                    image: "./assets/works/github.svg",
                    alternativeText: "Github Alternative Text",
                    label: "Github"
                },
                {
                    url: "http://twitter.com",
                    image: "./assets/works/twitter.svg",
                    alternativeText: "Twitter Alternative Text",
                    label: "Github"
                }
            ]
        }
    ];

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

    const isMobile = width <= 768;

    return (
        <>
            <Navbar />

            <main>
                <section id="home" className={clsx(styles.firstScreen)}>
                    <img src={!isMobile ? "./assets/background-desktop.jpg" : "./assets/background-mobile.jpg"} alt="Background section" />
                    <h1>{nombre.toUpperCase()}</h1>
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

                {experiences && (
                    <section className={clsx(styles.experience, "scroll-content", styles.fadeTop)}>
                        <h2>EXPERIENCE</h2>
                        <ul className={styles.experienceList}>
                            {experiences.map((experience, index) => {
                                return <ExperienceCard key={index} order={index} experienceInformation={experience} />;
                            })}
                        </ul>
                    </section>
                )}

                {projects && projects.length > 0 && (
                    <section id="projects" className={clsx(styles.works, "scroll-content", styles.fadeTop)}>
                        <h2>PROJECTS</h2>
                        <div className={styles.proyectContainer}>
                            {projects.map((project, index) => {
                                return <ProjectCard key={index} projectInformation={project} />;
                            })}
                        </div>
                    </section>
                )}

                <section id="getintouch" className={clsx(styles.getInTouch, "scroll-content", styles.fadeTop)}>
                    <h2>GET IN TOUCH</h2>
                    <form>
                        <input name="name" type="text" placeholder="Name"></input>
                        <input name="email" type="email" placeholder="Email"></input>
                        <input name="phone" placeholder="Phone number"></input>
                        <textarea name="message" placeholder="Message"></textarea>
                        <button type="submit" value="">
                            Send message
                        </button>
                    </form>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Portfolio;
