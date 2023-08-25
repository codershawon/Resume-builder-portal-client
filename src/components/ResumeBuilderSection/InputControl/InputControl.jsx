import styles from "./InputControl.module.css";

const InputControl = ({ label, ...props }) => {
    return (
        <div>
            <div className={styles.container}>
                {label && <label>{label}</label>}
                <input type="text" {...props} />
            </div>
        </div>
    );
};

export default InputControl;