import { Menu } from "../../components/Menu"
import styles from "./styles.module.sass"
import database from "../../database/subscriber.example.json"

export function Admin () {
    
    const cards = database.map(obj => {
        return (
            <section className={styles.subscriber}>
                <div>
                    <h1>{obj.name} - <span>{obj.company}</span></h1>
                    <button>Excluir</button>
                </div>
                
                <h2>{obj.email}</h2>
                <h3>{obj.website}</h3>
                <div>
                    <div><span className={ obj.marketing ? styles.active : styles.no_active }></span>Marketing</div>
                    <div><span className={ obj.police ? styles.active : styles.no_active }></span>Política de privacidades</div>
                    <div>{obj.created_at}</div>
                </div>
                
            </section>
            )
    })

    return (
        <main className={styles.contentWrapper}>
            <Menu />
            <div className={styles.container}>
                <div className={styles.cards}>
                    {cards}
                </div>
            </div>
        </main>
    )
}