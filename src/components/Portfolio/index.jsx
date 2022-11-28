import Footer from "../Footer";
import Navbar from "../Navbar";
import ProjectCard from "../ProjectCard";
import styles from "./Portfolio.module.scss";
//import imgExample from "./assets/works/example.jpg";

function Portfolio() {
    let nombre = "Franco Azari";

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

    return (
        <>
            <Navbar />
            <main>
                <section className={styles.firstScreen}>
                    <h1>{nombre.toUpperCase()}</h1>
                </section>

                <section className={styles.aboutMe}>
                    <h2>About me</h2>
                    <div className={styles.information}>
                        <div className={styles.image}>{/* <img src={} alt={} /> */}</div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae, recusandae quidem et in corporis eaque cumque, doloribus suscipit,
                            incidunt quis qui ea possimus deleniti a quaerat voluptatum voluptatem dolore! Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quasi mollitia magnam voluptas nesciunt debitis adipisci magni, aperiam ipsum asperiores vel doloribus ab iure deserunt non
                            labore quidem tenetur ducimus accusamus.
                        </p>
                    </div>
                </section>
                {projects && projects.length > 0 && (
                    <section className={styles.works}>
                        <h2>Projects</h2>
                        {projects.map((project, index) => {
                            return <ProjectCard key={index} projectInformation={project} />;
                        })}
                    </section>
                )}
                <section className={styles.contact}>
                    <h2>GET IN TOUCH</h2>
                    <form>
                        <input name="firstName" type="text" placeholder="First name"></input>
                        <input name="lastName" type="text" placeholder="Last name"></input>
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
