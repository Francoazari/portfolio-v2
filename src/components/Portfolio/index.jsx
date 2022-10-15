import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "./Portfolio.module.scss";
//import imgExample from "./assets/works/example.jpg";

function Portfolio() {
    return (
        <>
            <Navbar />
            <main>
                <section class={styles.firstScreen}>
                    <h1>FRANCO AZARI</h1>
                </section>

                <section className={styles.aboutMe}>
                    <h2>About me</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae, recusandae quidem et in corporis eaque cumque, doloribus suscipit,
                        incidunt quis qui ea possimus deleniti a quaerat voluptatum voluptatem dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi mollitia magnam voluptas nesciunt debitis adipisci magni, aperiam ipsum asperiores vel doloribus ab iure deserunt non labore
                        quidem tenetur ducimus accusamus.
                    </p>
                </section>
                <section className={styles.works}>
                    <h2>Projects</h2>

                    <div className={styles.card}>
                        <div className={styles.cardContainer}>
                            <div className={styles.cardImage}>
                                <img src={"./assets/works/example.jpg"} alt={"asd"} />
                            </div>
                            <div className={styles.cardInfo}>
                                <h2>Trabajo 1</h2>
                                <div className={styles.paragraph}>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aliquam similique suscipit corrupti non dolor vel quos,
                                        error enim officiis dolorum temporibus magnam a velit voluptatibus. Ipsa aliquam animi consequuntur.
                                    </p>
                                </div>
                                <div className={styles.skillTags}>
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JAVASCRIPT</li>
                                        <li>REACT</li>
                                    </ul>
                                </div>
                                <div className={styles.worksLinks}>
                                    <a href={"https://www.github.com"}>
                                        <img src={"./assets/works/github.svg"} alt="GitHub logo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardContainer}>
                            <div className={styles.cardImage}>
                                <img src={"./assets/works/example.jpg"} alt={"asd"} />
                            </div>
                            <div className={styles.cardInfo}>
                                <h2>Trabajo 2</h2>
                                <div className={styles.paragraph}>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aliquam similique suscipit corrupti non dolor vel quos,
                                        error enim officiis dolorum temporibus magnam a velit voluptatibus. Ipsa aliquam animi consequuntur.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardContainer}>
                            <div className={styles.cardImage}>
                                <img src={"./assets/works/example.jpg"} alt={"asd"} />
                            </div>
                            <div className={styles.cardInfo}>
                                <h2>Trabajo 3</h2>
                                <div className={styles.paragraph}>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aliquam similique suscipit corrupti non dolor vel quos,
                                        error enim officiis dolorum temporibus magnam a velit voluptatibus. Ipsa aliquam animi consequuntur.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Portfolio;
