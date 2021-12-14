import styles from './styles.module.sass'

export function LandingForm () {
    return (
        <aside className={styles.contentWrapper}>
            <form>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="company">Empresa</label>
                <input type="text" name="company" id="company" />
                <label htmlFor="website">Site da empresa</label>
                <input type="url" name="website" id="website" />

                <hr />

                <div>
                    <input type="checkbox" name="marketing" id="marketing" />
                    <label htmlFor="marketing">Desejo receber e-mail com atualização de material.</label>
                </div>
                <div>
                    <input type="checkbox" name="police" id="police" />
                    <label htmlFor="police">Li e aceito as <a href="#">políticas de privacidade</a>.</label>
                </div>
                
                <div className={styles.button}>
                    <button>Quero E-Book</button>
                </div>
            </form>
        </aside>
    )
}