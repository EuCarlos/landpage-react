import { LandingForm } from "../../components/LandingForm"
import styles from "./styles.module.sass"
import { TiHomeOutline, TiSocialDribbble, TiSocialGithub, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import image from "../../images/image.svg"
import { Menu } from "../../components/Menu";
import { MessageList } from "../../components/MessageList";

export function Home () {
    return (
        <section className={styles.contentWrapper}>
            <Menu/>
            <section>
                <div className={styles.contentLandPage}>
                    <div className={styles.text}>
                        <div>
                            <img src={image} alt="Imagem do topo" />
                        </div>
                        <h1>Como utilizar o ReGex</h1>
                        <h2>E-book que te ajudará a dominar o ReGex</h2>
                        <p>Criamos o guia completo de <strong>Como utilizar o ReGex</strong> para quem quer se tornar um especialista e dominar as expressões regulares, de forma que obtenha a visão geral de boas práticas para melhorar as validações no código. Para obter o e-book é simples, basta preencher o formulário apresentando nesta pagina... eai, está pronto para ter o seu?</p>
                        <p>No guia completo de <strong>Como utilizar o ReGex </strong> você vai encontrar muito conteudo para aumentar o seu repertório de estudos. Os tópicos são os seguintes: O que é o RegEx? E para que serve? Recursos, Flags, Meta-Caracteres, Grupos e Intervalos, Quantificadores, Âncora, Outros Meta-Caracteres, Expressões de Validação,  Aplicação na Programação e muito mais...</p>
                        <MessageList />

                        <p>Entre você também na nossa comunidade open-source e contribua com esse projeto no github acessando o repositório <a href="https://github.com/EuCarlos/RegEx" target="blank">@EuCarlos/RegEx</a>. Tá! Mas como posso contribuir com a comunidade? Simples, basta você fazer um fork, fazer suas atualizações e mandar um pull request. E se estiver de acordo com as normas será aceita o mais breve possível. Ta bem, mas sou iniciante então não posso ajudar... muita calma, claro que pode ajudar, basta fazer pergunta e/ou responder às dúvidas da galera nas issue.</p>
                        <p>Veja esse e outros projetos no meu portfólio pessoal, acessando <a href="https://carlosalves.now.sh/" target="blank">carlosalves.now.sh</a>. Lá você encontrará o acompanhamento com detalhes sobre o desenvolvimento de sites e sistemas feitos por mim no modelo de blog mostrando engenharia, estratégias, modelagens e arquitetura com uma linguagem simples de entender.</p>
                    </div>

                    <div className={styles.share}>
                        <h1>Compatilhe com amigos</h1>
                        <div className={styles.buttonsShare}>
                            <a href="https://github.com/eucarlos" target="blank">
                                <TiSocialGithub size="28" />
                            </a>
                            <a href="https://www.linkedin.com/in/josecarlos98" target="blank">
                                <TiSocialLinkedin size="28" />
                            </a>
                            <a href="https://dribbble.com/eucarlos" target="blank">
                                <TiSocialDribbble size="24" />
                            </a>
                            <a href="https://www.instagram.com/carlos.alves/" target="blank">
                                <TiSocialInstagram size="24" />
                            </a>
                            <a href="https://carlosalves.vercel.app/" target="blank">
                                <TiHomeOutline size="24" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.ladingForm}>
                    <LandingForm/>
                </div>
            </section>
        </section>
    )
}