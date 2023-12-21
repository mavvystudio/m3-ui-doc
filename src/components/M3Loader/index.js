import styles from "./styles.module.css";

export default function M3Loader({ children }) {
  return <div className={styles.root}>{children}</div>;
}
