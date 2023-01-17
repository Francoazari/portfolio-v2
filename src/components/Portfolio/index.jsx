import clsx from "clsx";
import ExperienceCard from "../ExperienceCard";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ProjectCard from "../ProjectCard";
import styles from "./Portfolio.module.scss";
//import imgExample from "./assets/works/example.jpg";

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
                    alternatiText: "Github Alternative Text"
                },
                {
                    url: "http://linkedin.com",
                    image: "./assets/works/linkedin.svg",
                    alternatiText: "LinkedIn Alternative Text"
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
                    alternatiText: "Github Alternative Text"
                },
                {
                    url: "http://twitter.com",
                    image: "./assets/works/twitter.svg",
                    alternatiText: "Twitter Alternative Text"
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
                    alternatiText: "Github Alternative Text"
                },
                {
                    url: "http://twitter.com",
                    image: "./assets/works/twitter.svg",
                    alternatiText: "Twitter Alternative Text"
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

    return (
        <>
            <Navbar />

            <main>
                <section id="home" className={clsx(styles.firstScreen)}>
                    <h1>{nombre.toUpperCase()}</h1>
                </section>

                <section id="aboutme" className={clsx(styles.aboutMe, "scroll-content", styles.fadeLeft)}>
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
                    <section className={clsx(styles.experience, "scroll-content", styles.fadeRight)}>
                        <h2>EXPERIENCE</h2>
                        <ul className={styles.experienceList}>
                            {experiences.map((experience, index) => {
                                return <ExperienceCard key={index} experienceInformation={experience} />;
                            })}
                        </ul>
                    </section>
                )}

                {projects && projects.length > 0 && (
                    <section id="projects" className={clsx(styles.works, "scroll-content", styles.fadeLeft)}>
                        <h2>PROJECTS</h2>
                        {projects.map((project, index) => {
                            return <ProjectCard key={index} projectInformation={project} />;
                        })}
                    </section>
                )}

                <section id="getintouch" className={clsx(styles.getInTouch, "scroll-content", styles.fadeRight)}>
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
