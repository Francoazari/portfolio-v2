import clsx from "clsx";
import { useContext } from "react";
import { MainContext } from "../../contexts";
import styles from "./ProjectCard.module.scss";
import animatedStyle from "../../styles/animated-element.module.scss";
import TagList from "../TagList";
import ReadMore from "../ReadMore";

function ProjectCard({ projectInformation }) {
    const { isMobile, setModalContent, modalContent } = useContext(MainContext);

    const openModal = () => {
        if (!isMobile) return;
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
                            <ReadMore length="200" customStyles={styles.readMoreExperience}>
                                {projectInformation.paragraph}
                            </ReadMore>
                        </div>

                        {!isMobile && projectInformation.skillTags && <TagList list={projectInformation.skillTags} backgroundColor={"#2b4775"} />}

                        {!isMobile && projectInformation.worksLinks && (
                            <div className={styles.worksLinks}>
                                {projectInformation.worksLinks.map((workLink, index) => {
                                    return (
                                        <a
                                            key={index}
                                            href={workLink.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={clsx(animatedStyle.animatedElement, animatedStyle.order2)}
                                        >
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
