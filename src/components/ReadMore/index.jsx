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
        console.log(children);

        if (typeof children === "string") {
            setTypeChildren("string");
        } else if (typeof children === "object") {
            let lengthTemp = 0;

            setTypeChildren("object");
            children.forEach((child, key) => {
                if (child.length < length && typeof child === "string") {
                    lengthTemp += child.length;
                    if (lengthTemp + child.length >= length) {
                        setParagraphLetter({ paragraph: key, length: lengthTemp - length });
                    }
                } else {
                    setTypeChildren("not-valid");
                    console.error("ReadMore: Invalid paragraph");
                }
            });
        }
    }, [children, setTypeChildren, length]);

    return (
        <>
            {typeChildren === "string" && isShown ? children : String(children).substr(0, length)}
            {typeChildren === "object" &&
                children.forEach((child, key) => {
                    if (child.length <= length || isShown) {
                        return <p>{child}</p>;
                    } else {
                        return <p>{child.substr(0, paragraphLetter.length)}</p>;
                    }
                })}
            {!isShown && <button onClick={toggleButton}> {isShown ? "Show less" : "Read more"}</button>}
        </>
    );
}

export default ReadMore;
