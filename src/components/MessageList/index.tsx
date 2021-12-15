import messages from '../../database/messageList.json'
import styles from './styles.module.sass'

export function MessageList() {
    
    return (
        <div className={styles.MessageListWrapper}>

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