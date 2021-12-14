import { Home } from "./pages/Home";
import styles from "./styles.module.sass"

export function App() {
  return (
    <section className={styles.contentWrapper}>
      <Home />
    </section>
  )
}
