import styles from "./ProjectCard.module.scss";

function ProjectCard({ projectInformation }) {
    return (
        projectInformation && (
            <div className={styles.card}>
                <div className={styles.cardImage}>
                    <img src={"./assets/works/example.jpg"} alt={"asd"} />
                </div>
                <div className={styles.cardInfo}>
                    <div className={styles.information}>
                        <h3>{projectInformation.title}</h3>
                        <div className={styles.paragraph}>
                            <p>{projectInformation.paragraph}</p>
                        </div>
                        {projectInformation.skillTags && (
                            <div className={styles.skillTags}>
                                <ul>
                                    {projectInformation.skillTags.map((skill, index) => {
                                        return <li key={index}>{skill.toUpperCase()}</li>;
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>
                    {projectInformation.worksLinks && (
                        <div className={styles.worksLinks}>
                            {projectInformation.worksLinks.map((workLink, index) => {
                                return (
                                    <a key={index} href={workLink.url}>
                                        <img src={workLink.image} alt={workLink.alternativeText} />
                                        <p>{workLink.label}</p>
                                    </a>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        )
    );
}

export default ProjectCard;
