import styles from './Footer.module.scss'

export function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <span>Todos os direitos reservados ©</span>
            </div>           
                <div className={styles.socialButtons}>
                    <img src="src\assets\icons\Icon=Facebook.png" alt="" />
                    <img src="src\assets\icons\Icon=Instagram.png" alt="" />
                    <img src="src\assets\icons\Icon=Whatsapp.png" alt="" />
                    <img src="src\assets\icons\Icon=Youtube.png" alt="" />
                </div>            
        </footer>
    )
}