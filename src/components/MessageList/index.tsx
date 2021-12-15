export function MessageList() {
    
    return (
        <section>
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
        </section>
    )
}