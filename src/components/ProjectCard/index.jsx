import styles from "./ProjectCard.module.scss";

function ProjectCard() {
    return (
        <div className={styles.card}>
            <div className={styles.cardContainer}>
                <div className={styles.cardImage}>
                    <img src={"./assets/works/example.jpg"} alt={"asd"} />
                </div>
                <div className={styles.cardInfo}>
                    <h2>Project 1</h2>
                    <div className={styles.paragraph}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aliquam similique suscipit corrupti non dolor vel quos, error enim
                            officiis dolorum temporibus magnam a velit voluptatibus. Ipsa aliquam animi consequuntur.
                        </p>
                    </div>
                    <div className={styles.skillTags}>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>REACT</li>
                            <li>Angular</li>
                            <li>Next</li>
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
    );
}

export default ProjectCard;
