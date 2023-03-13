import styles from "./Error.module.scss";

function Error() {
    return (
        <div>
            <div className={styles.title}>
                <h2>FRANCO AZARI</h2>
            </div>
            <div className={styles.errorContainer}>
                <span>Lo sentimos ha ocurrido un error. Por favor contactese con el administrador del sitio.</span>
            </div>
        </div>
    );
}

export default Error;
