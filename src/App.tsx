import { Home } from "./pages/Home";
import styles from "./styles.module.sass"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Admin } from "./pages/Admin";

export function App() {
  return (
    <section className={styles.contentWrapper}>

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin" exact component={Admin}/>
        </Switch>
      </Router>
      
    </section>
  )
}
