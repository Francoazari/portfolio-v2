import clsx from "clsx";
import { useContext } from "react";
import { MainContext } from "../../contexts";
import styles from "./ProjectCard.module.scss";
import animatedStyle from "../../styles/animated-element.module.scss";

function ProjectCard({ projectInformation }) {
    const { isDesktop, setModalContent, modalContent } = useContext(MainContext);

    const openModal = () => {
        if (isDesktop) return;
        if (!modalContent) setModalContent(projectInformation);
    };

    return (
        projectInformation && (
            <div className={clsx(styles.card)} onClick={openModal}>
                <div className={styles.cardImage}>
                    <img src={"./assets/works/example.jpg"} alt={"asd"} />
                </div>
                <div className={styles.cardInfo}>
                    <div className={styles.information}>
                        <h3>{projectInformation.title}</h3>
                        <div className={styles.paragraph}>
                            <p>{projectInformation.paragraph}</p>
                        </div>

                        {isDesktop && projectInformation.skillTags && (
                            <div className={styles.skillTags}>
                                <ul>
                                    {projectInformation.skillTags.map((skill, index) => {
                                        return (
                                            <li key={index} className={clsx(animatedStyle.animatedElement, animatedStyle.order1)}>
                                                {skill.toUpperCase()}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}

                        {isDesktop && projectInformation.worksLinks && (
                            <div className={styles.worksLinks}>
                                {projectInformation.worksLinks.map((workLink, index) => {
                                    return (
                                        <a key={index} href={workLink.url} className={clsx(animatedStyle.animatedElement, animatedStyle.order2)}>
                                            <img src={workLink.image} alt={workLink.alternativeText} />
                                            <p>{workLink.label}</p>
                                        </a>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    );
}

export default ProjectCard;
