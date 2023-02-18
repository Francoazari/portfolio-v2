import clsx from "clsx";
import { useContext, useRef, useState } from "react";
import FocusLock from "react-focus-lock";
import { MainContext } from "../../contexts";
import useEventListener from "../../hooks/useEventListener";
import styles from "./Modal.module.scss";

function Modal() {
    const { modalContent, setModalContent } = useContext(MainContext);
    const [contentMounted, setContentMounted] = useState(true);
    const background = useRef();

    console.log("modalContent:", modalContent);
    const closeModal = () => {
        setModalContent(null);
        setContentMounted(false);
    };

    const handleKeyDown = ({ keyCode }) => {
        if (keyCode === 27 || keyCode === 37 || keyCode === 39) {
            closeModal();
        }
    };

    const handleBackgroundClick = ({ target }) => {
        if (!background.current.firstChild.contains(target)) closeModal();
    };

    useEventListener("keydown", handleKeyDown, document);
    useEventListener("pointerdown", handleBackgroundClick, document);

    return (
        <FocusLock>
            <div className={styles.container} ref={background}>
                <div
                    className={clsx(styles.modal, {
                        [styles.fadeIn]: contentMounted,
                        [styles.fadeOut]: !contentMounted
                    })}
                >
                    <div className={styles.closeButton} tabIndex="1" onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                        </svg>
                    </div>
                    <img src={"./assets/works/example.jpg"} alt={"asd"} />
                    <div className={styles.information}>
                        <h2>{modalContent.title}</h2>
                    </div>
                </div>
            </div>
        </FocusLock>
    );
}

export default Modal;
