import { useState } from 'react'
import styles from './styles.module.sass'

export function LandingForm () {
    const [ contentForm, setContentForm] = useState({
        name: '',
        email: '',
        company: '',
        website: ''
    })

    const handleSubmit = (e: any) => {
        e.preventDefault()
        alert(`Obrigado ${contentForm.name} por se inscrever na nossa LandPage, verifique se já recebeu na sua na caixa de mensagem e/ou no spam do seu e-mail.`)
    }

    return (
        <aside className={styles.contentWrapper}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    onChange={(e) =>  setContentForm({...contentForm, name: e.target.value})} 
                    value={ contentForm.name } 
                />
                <label htmlFor="email">E-mail</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    onChange={(e) =>  setContentForm({...contentForm, email: e.target.value})} 
                    value={ contentForm.email } 
                />
                <label htmlFor="company">Empresa</label>
                <input 
                    type="text" 
                    name="company" 
                    id="company" 
                    onChange={(e) =>  setContentForm({...contentForm, company: e.target.value})} 
                    value={ contentForm.company } 
                />
                <label htmlFor="website">Site da empresa</label>
                <input 
                    type="url" 
                    name="website" 
                    id="website" 
                    onChange={(e) =>  setContentForm({...contentForm, website: e.target.value})} 
                    value={ contentForm.website } 
                />

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