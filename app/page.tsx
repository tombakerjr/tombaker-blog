import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the mind of Tom Baker</h1>

        <p className={styles.description}>
          <a href="https://github.com/tombakerjr">Github Profile</a>
        </p>
      </main>
    </div>
  );
}
