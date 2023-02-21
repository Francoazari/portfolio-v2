import clsx from "clsx";
import styles from "./TagList.module.scss";

function TagList({ list, backgroundColor, fontColor, align }) {
    console.log();
    return (
        <ul style={{ "--background-color": `${backgroundColor}`, "--font-color": `${fontColor}` }} className={clsx({ [styles.alignRight]: align === "right" })}>
            {list.map((item, index) => {
                return <li key={index}>{item}</li>;
            })}
        </ul>
    );
}

export default TagList;