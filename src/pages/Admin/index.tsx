import { Menu } from "../../components/Menu"
import styles from "./styles.module.sass"
import database from "../../database/subscriber.example.json"
import { BsTrash } from "react-icons/bs"

export function Admin () {
    
    const cards = database.map(obj => {
        return (
            <section className={styles.subscriber}>
                <div className={styles.top}>
                    <h1>{obj.name} - <span>{obj.company}</span></h1>
                    <button><BsTrash /></button>
                </div>
                
                <h2>{obj.email}</h2>
                <a href={obj.website} target="_blank">{obj.website}</a>
                <div className={styles.status}>
                    <p><span className={ obj.marketing ? styles.active : styles.no_active }></span>Marketing</p>
                    <p><span className={ obj.police ? styles.active : styles.no_active }></span>Política de privacidades</p>
                    <p className={styles.dates}>{obj.created_at}</p>
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