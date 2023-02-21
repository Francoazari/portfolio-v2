import clsx from "clsx";
import { useContext, useRef, useState } from "react";
import FocusLock from "react-focus-lock";
import { MainContext } from "../../contexts";
import useEventListener from "../../hooks/useEventListener";
import styles from "./Modal.module.scss";
import animatedStyle from "../../styles/animated-element.module.scss";
import TagList from "../TagList";

function Modal() {
    const { modalContent, setModalContent } = useContext(MainContext);
    const [contentMounted, setContentMounted] = useState(true);
    const background = useRef();

    const closeModal = () => {
        setContentMounted(false);
        setTimeout(() => {
            setModalContent(null);
        }, 100);
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
            <div className={clsx(styles.container)} ref={background}>
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
                    <div className={styles.assetContainer}>
                        <img src={"./assets/works/example.jpg"} alt={"asd"} />
                    </div>
                    <div className={styles.information}>
                        <h3 className={clsx(animatedStyle.animatedElement, animatedStyle.order1)}>{modalContent?.title}</h3>
                        <p className={clsx(animatedStyle.animatedElement, animatedStyle.order2)}>{modalContent?.paragraph}</p>

                        {modalContent?.skillTags && (
                            <div className={clsx(styles.tags, animatedStyle.animatedElement, animatedStyle.order3)}>
                                <TagList list={modalContent?.skillTags} backgroundColor={"#2b4775"} fontColor={"#fff"} />
                            </div>
                        )}

                        {modalContent?.worksLinks && (
                            <div className={clsx(styles.worksLinks, animatedStyle.animatedElement, animatedStyle.order4)}>
                                {modalContent?.worksLinks.map((workLink, index) => {
                                    return (
                                        <a key={index} href={workLink.url}>
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
        </FocusLock>
    );
}

export default Modal;
