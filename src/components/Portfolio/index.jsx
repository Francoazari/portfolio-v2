import Footer from "../Footer";
import Navbar from "../Navbar";
import ProjectCard from "../ProjectCard";
import styles from "./Portfolio.module.scss";
//import imgExample from "./assets/works/example.jpg";

function Portfolio() {
    const projects = [
        {
            title: "project 1",
            paragraph: "nmskd andnl dsnslakn dk lansdsa lkndakl",
            skillTags: [
                "HTML",
                "CSS",
                "JAVASCRIPT",
            ]
        },
        {
            title: "project 2",
            paragraph: "nmskd andnl dsnslakn dk lansdsa lkndakl ",
            skillTags: [
                "HTML",
                "CSS",
                "JAVASCRIPT",
                "REACT"
            ]
        }

    ]
    return (
        <>
            <Navbar />
            <main>
                <section className={styles.firstScreen}>
                    <h1>FRANCO AZARI</h1>
                </section>

                <section className={styles.aboutMe}>
                    <div className={styles.image}>{/* <img src={} alt={} /> */}</div>
                    <div className={styles.information}>
                        <h2>About me</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae, recusandae quidem et in corporis eaque cumque, doloribus suscipit,
                            incidunt quis qui ea possimus deleniti a quaerat voluptatum voluptatem dolore! Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quasi mollitia magnam voluptas nesciunt debitis adipisci magni, aperiam ipsum asperiores vel doloribus ab iure deserunt non
                            labore quidem tenetur ducimus accusamus.
                        </p>
                    </div>
                </section>
                <section className={styles.works}>
                    <h2>Projects</h2>
                    {projects.map((project, index) => {
                        return(
                            <ProjectCard 
                                key={index}
                                projectInformation={project}
                            />
                        )
                    })}
                    
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Portfolio;
