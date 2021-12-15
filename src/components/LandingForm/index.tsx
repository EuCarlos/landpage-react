import { useState } from 'react'
import styles from './styles.module.sass'
import { api } from '../../services/api'

export function LandingForm () {
    const [ contentForm, setContentForm] = useState({
        name: '',
        email: '',
        company: '',
        website: '',
        marketing: false,
        police: false
    })

    const handleSubmit = (e: any) => {
        e.preventDefault()
        
        api
            .post('/subscription', contentForm)
            .then(res => {
                setContentForm(res.data.id)
                alert(`Obrigado ${contentForm.name} por se inscrever na nossa LandPage, verifique se já recebeu na sua na caixa de mensagem e/ou no spam do seu e-mail.`)
            })
            .catch((err) => alert('Ops, temos um problema com nossos servidores, por favor tente novamente mais tarde.'))
        
    }

    return (
        <aside className={styles.contentWrapper}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome *</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    onChange={(e) =>  setContentForm({...contentForm, name: e.target.value})} 
                    value={ contentForm.name } 
                    required
                />
                <label htmlFor="email">E-mail *</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    onChange={(e) =>  setContentForm({...contentForm, email: e.target.value})} 
                    value={ contentForm.email } 
                    required
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
                    <input 
                        type="checkbox" 
                        name="marketing" 
                        id="marketing" 
                        onChange={() => contentForm.marketing == true ? setContentForm({...contentForm, marketing: false}) : setContentForm({...contentForm, marketing: true})} 
                        checked={ contentForm.marketing }
                    />
                    <label htmlFor="marketing">Desejo receber e-mail com atualização de material.</label>
                </div>
                <div>
                    <input 
                        type="checkbox" 
                        name="police" 
                        id="police" 
                        onChange={() => contentForm.police == true ? setContentForm({...contentForm, police: false}) : setContentForm({...contentForm, police: true})} 
                        checked={ contentForm.police }
                        required
                    />
                    <label htmlFor="police">Li e aceito as <a href="#">políticas de privacidade</a>. *</label>
                </div>
                
                <div className={styles.button}>
                    <button>Quero E-Book</button>
                </div>
            </form>
        </aside>
    )
}