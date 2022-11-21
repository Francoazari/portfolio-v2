import styles from "./ProjectCard.module.scss";

function ProjectCard(projectInformation) {
    return (
        <div className={styles.card}>
            <div className={styles.cardContainer}>
                <div className={styles.cardImage}>
                    <img src={"./assets/works/example.jpg"} alt={"asd"} />
                </div>
                <div className={styles.cardInfo}>
                    <h2>{projectInformation.title}</h2>
                    <div className={styles.paragraph}>
                        <p>{projectInformation.paragraph}</p>
                    </div>
                    <div className={styles.skillTags}>
                        <ul>
                            {projectInformation.skillTags.map((skill, index) => {
                                return(<li key={index}>{skill}</li>)
                            })}
                            
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
