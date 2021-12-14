export function LandingForm () {
    return (
        <aside>
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

                <input type="checkbox" name="marketing" id="marketing" />
                <label htmlFor="marketing">Desejo receber e-mail com atualização de material.</label>
                <input type="checkbox" name="police" id="police" />
                <label htmlFor="police">Li e aceito as políticas de privacidade.</label>
                <div>
                    <button>Quero e-book</button>
                </div>
            </form>
        </aside>
    )
}