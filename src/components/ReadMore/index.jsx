import { useEffect, useState } from "react";

function ReadMore({ length = 500, children }) {
    const [isShown, setIsShown] = useState(false);
    const [typeChildren, setTypeChildren] = useState();
    const [paragraphLetter, setParagraphLetter] = useState();

    const toggleButton = () => {
        setIsShown((prevState) => !prevState);
    };

    useEffect(() => {
        if (!children) return;

        if (typeof children === "string") {
            setTypeChildren("string");
        } else if (typeof children === "object") {
            let lengthTemp = 0;

            setTypeChildren("object");
            children.forEach((child, key) => {
                console.log("child:", child.length, "key:", key);
                if (typeof child === "string") {
                    if (child.length < length) {
                        if (lengthTemp + child.length >= length) {
                            setParagraphLetter({ paragraph: key, length: length - lengthTemp });
                        }
                        lengthTemp += child.length;
                    }
                } else {
                    setTypeChildren("not-valid");
                    console.error("ReadMore: Invalid paragraph");
                }
            });
        } else {
            setTypeChildren("not-valid");
            console.error("ReadMore: Invalid paragraph");
        }
    }, [children, setTypeChildren, length]);

    return (
        <>
            {typeChildren === "string" && isShown ? children : String(children).substr(0, length)}
            {typeChildren === "object" &&
                children.forEach((child, key) => {
                    if (key <= paragraphLetter.paragraph || isShown) {
                        const paragraph = document.createElement("p");
                        paragraph.innerHTML =
                            key !== paragraphLetter.paragraph || isShown ? child : (paragraph.innerHTML = child.substr(0, paragraphLetter.length));
                        return paragraph;
                    }
                })}
            {!isShown && <button onClick={toggleButton}> {isShown ? "Show less" : "Read more"}</button>}
        </>
    );
}

export default ReadMore;
