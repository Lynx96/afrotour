import { useNavigate } from 'react-router-dom'
import { Home } from '../pages/Home';
import styles from './Header.module.scss'

export function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <div className={styles.header} onClick={() => navigate("/")}>
                <div>
                    Afro<span>Tour</span>
                </div>
            </div>
        </header>

    )
}