import clsx from "clsx";
import TagList from "../TagList";
import styles from "./ExperienceCard.module.scss";

function ExperienceCard({ experienceInformation, order }) {
    return (
        experienceInformation && (
            <li
                className={clsx(styles.experienceCard, {
                    [styles.left]: order % 2 !== 0
                })}
            >
                <span className={styles.heading}>{experienceInformation.heading}</span>
                <span className={styles.period}>{experienceInformation.period}</span>
                <p>{experienceInformation.paragraph}</p>
                {experienceInformation.skills && <TagList list={experienceInformation.skills} backgroundColor={"#2b4775"} fontColor={"#fff"} />}
            </li>
        )
    );
}

export default ExperienceCard;
