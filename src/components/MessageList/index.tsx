import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import styles from './styles.module.sass'

type Message = {
    id: string, 
    text: string, 
    user: {
        name: string, 
        avatar_url: string
    }
}

export function MessageList() {
    
    const [ messages, setMessages ] = useState<Message[]>([])

    useEffect(() => {
        api
            .get<Message[]>('/messages')
            .then((response) => setMessages(response.data))
            .catch((err) => alert("Ops, ocorreu um erro: " + err))
    }, [])

    return (
        <div className={styles.MessageListWrapper}>
            <h3>Veja alguns comentários sobre o E-book</h3> 
            <ul className={styles.messageList}>
                { messages.map(message => {
                    return(
                        <li key={message.id} className={styles.message}>
                            <p className={styles.messageContent}>{message.text}</p>
                            <div className={styles.messageUser}>
                                <div className={styles.userImage}>
                                    <img src={message.user.avatar_url} alt={message.user.name} />
                                </div>
                                <span>{message.user.name}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}