
import styles from "./m_footer.module.css";

export function M_Footer() {
    return (
        <div className={styles["mile-footer"]}>
            <div className={styles["mile-content"]}>
                <p className={styles["mile-rate"]}>
                    ₹ 1350
                </p>
                <p className={styles["mile-validity"]}>validity: 12 Months</p>

            </div>
            <div className={styles["mile-button"]} >
                <img

                    src={"miles/cart.png"}
                    alt="img"
                    style={{ width: "2em", height: "1em", objectFit: "contain" }}
                />
                <div className={styles["button-content"]}>VIEW CART</div>
            </div>

        </div>
    )
}