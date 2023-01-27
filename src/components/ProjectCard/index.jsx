import clsx from "clsx";
import { useContext } from "react";
import { useState } from "react";
import { MainContext } from "../../contexts";
import styles from "./ProjectCard.module.scss";
import animatedStyle from "../../styles/animated-element.module.scss";

function ProjectCard({ projectInformation }) {
    const [openModal, setOpenModal] = useState(false);
    const { isDesktop, isMobile } = useContext(MainContext);

    return (
        projectInformation && (
            <div
                className={clsx(styles.card, {
                    [styles.modal]: openModal
                })}
                onClick={() => setOpenModal(!openModal)}
            >
                <div className={styles.cardImage}>
                    <img src={"./assets/works/example.jpg"} alt={"asd"} />
                </div>
                <div className={styles.cardInfo}>
                    <div className={styles.information}>
                        <h3>{projectInformation.title}</h3>
                        <div className={styles.paragraph}>
                            <p>{projectInformation.paragraph}</p>
                        </div>

                        {(isDesktop || (isMobile && openModal)) && projectInformation.skillTags && (
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

                        {(isDesktop || (isMobile && openModal)) && projectInformation.worksLinks && (
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
