import styles from "../styles/Home.module.css";

export default function Headline(props: { title: string; adress: string }) {
  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>{props.adress}/.tsx</code>
      </p>
    </div>
  );
}
