import { LandingForm } from "../../components/LandingForm"
import styles from "./styles.module.sass"
import { TiHomeOutline, TiSocialDribbble, TiSocialGithub, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import image from "../../images/image.svg"

export function Home () {
    return (
        <section className={styles.contentWrapper}>
            <nav>Menu</nav>
            <section>
                <div className={styles.contentLandPage}>
                    <div className={styles.text}>
                        <div>
                            <img src={image} alt="Imagem do topo" />
                        </div>
                        <h1>Title</h1>
                        <h2>Subtitle</h2>
                        <p>Mollit reprehenderit Lorem fugiat labore do dolore qui tempor nostrud eiusmod. Incididunt deserunt duis ad laboris incididunt qui laborum amet et laborum laborum duis elit. Lorem duis anim voluptate consectetur dolore pariatur do culpa. Enim eiusmod minim elit velit cupidatat minim aliqua incididunt sunt do elit. Enim ea qui dolore dolore esse et ad.</p>
                        <p>Laboris officia quis fugiat excepteur culpa laborum ullamco. Ullamco occaecat Lorem ipsum nostrud quis aliquip nisi tempor irure consectetur voluptate culpa. Magna consectetur culpa quis ex adipisicing Lorem fugiat. Ullamco culpa est consequat ipsum labore cillum adipisicing deserunt labore amet magna. Ea Lorem Lorem irure irure. Et eu non reprehenderit sunt magna deserunt velit enim laborum ut adipisicing commodo ut.</p>
                        <p>Eiusmod pariatur duis amet ipsum. Aliquip deserunt tempor minim aute exercitation duis veniam ex quis aliquip magna labore minim fugiat. Ipsum sunt aliqua ex minim ex tempor occaecat fugiat non dolor ea nulla veniam. Aliqua in reprehenderit esse aute eiusmod ullamco consequat irure proident qui est adipisicing adipisicing. Minim ea ipsum adipisicing velit et ut occaecat. Ex voluptate reprehenderit reprehenderit veniam cupidatat quis sunt nostrud sunt.</p>
                        <p>Enim officia labore esse culpa est eu adipisicing magna irure pariatur enim. Est deserunt laborum enim proident in fugiat pariatur pariatur sint sit fugiat esse. Excepteur ut irure adipisicing tempor qui adipisicing. Lorem non id velit velit exercitation voluptate ullamco sunt.</p>
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