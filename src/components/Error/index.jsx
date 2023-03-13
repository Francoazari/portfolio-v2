import styles from "./Error.module.scss";

function Error() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>FRANCO AZARI</h2>
            </div>
            <div className={styles.errorContainer}>
                <span>Sorry, an error has occurred. Please contact the site administrator.</span>
            </div>
        </div>
    );
}

export default Error;
