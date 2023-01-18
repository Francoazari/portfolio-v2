import clsx from "clsx";
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
                {experienceInformation.skills && (
                    <ul className={styles.experienceSkill}>
                        {experienceInformation.skills.map((skill, index) => {
                            return <li key={index}>{skill}</li>;
                        })}
                    </ul>
                )}
            </li>
        )
    );
}

export default ExperienceCard;
