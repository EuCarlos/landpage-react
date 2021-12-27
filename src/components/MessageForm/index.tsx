import { useState } from 'react'
import styles from './styles.module.sass'
import { api } from '../../services/api'

export function MessageForm () {
    const [ contentForm, setContentForm] = useState({
        text: '',
        name: '',
        avatar_url: ''
    })

    const handleSubmit = (e: any) => {
        e.preventDefault()
        
        api
            .post('/message', contentForm)
            .then(res => {
                setContentForm(res.data.id)
                alert(`Obrigado ${contentForm.name} por nos enviar um feedback.`)
            })
            .catch((err) => alert('Ops, temos um problema com nossos servidores, por favor tente novamente mais tarde.'))
        
    }

    return (
        <aside className={styles.contentWrapper}>
            <form onSubmit={handleSubmit}>
                <p>Nos mande um feedback sobre o conteúdo do e-book.</p>
                <label htmlFor="name">Nome *</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    onChange={(e) =>  setContentForm({...contentForm, name: e.target.value})} 
                    value={ contentForm.name } 
                    required
                />
                <label htmlFor="avatar">Avatar *</label>
                <input 
                    type="url" 
                    name="avatar" 
                    id="avatar" 
                    onChange={(e) =>  setContentForm({...contentForm, avatar_url: e.target.value})} 
                    value={ contentForm.avatar_url } 
                    required
                />
                <label htmlFor="message">Messagem *</label>
                <textarea name="" id=""></textarea>
                
                <div className={styles.button}>
                    <button>Enviar feedback</button>
                </div>
            </form>
        </aside>
    )
}