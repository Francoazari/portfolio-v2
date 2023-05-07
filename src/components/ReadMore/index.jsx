import { useEffect, useState } from "react";
import styles from "./ReadMore.module.scss";
import clsx from "clsx";

function ReadMore({ length = 200, children, customStyles }) {
    const [isShown, setIsShown] = useState(false);
    const [typeChildren, setTypeChildren] = useState();
    const [paragraphLetter, setParagraphLetter] = useState();
    const [hideButton, setHideButton] = useState(false);

    const toggleButton = () => setIsShown((prevState) => !prevState);

    useEffect(() => {
        if (!children) return;

        if (typeof children === "string") {
            setTypeChildren("string");
            if (children.length <= length) {
                setHideButton(true);
            }
        } else if (typeof children === "object") {
            let lengthTemp = 0;
            setTypeChildren("object");

            children.forEach((child, key) => {
                if (typeof child === "string") {
                    if (lengthTemp <= length && child.length + lengthTemp > length) {
                        setParagraphLetter({ paragraph: key, length: length - lengthTemp });
                    }
                    lengthTemp += child.length;
                } else {
                    setTypeChildren("not-valid");
                    console.error("ReadMore: Invalid paragraph");
                }
            });

            if (lengthTemp <= length) {
                setHideButton(true);
                setIsShown(true);
            }
        } else {
            setTypeChildren("not-valid");
            console.error("ReadMore: Invalid paragraph");
        }
    }, [children, setTypeChildren, length]);

    return (
        <>
            {typeChildren === "string" && (isShown ? children : children.substr(0, length))}
            {typeChildren === "object" &&
                children.map((child, key) => {
                    if (key <= paragraphLetter?.paragraph || isShown) {
                        if (key !== paragraphLetter?.paragraph || isShown) {
                            return <p key={key}>{child}</p>;
                        } else {
                            return <p key={key}>{child.substr(0, paragraphLetter?.length)}</p>;
                        }
                    } else {
                        return <p key={key}></p>;
                    }
                })}
            {!hideButton && (
                <button
                    className={clsx(styles.buttonReadMore, {
                        [customStyles]: customStyles
                    })}
                    onClick={toggleButton}
                >
                    {isShown ? "Read less" : "Read more"}
                </button>
            )}
        </>
    );
}

export default ReadMore;
