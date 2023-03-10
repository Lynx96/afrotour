import './styles/global.scss'

import { Header } from './Header'
import { Footer } from './Footer'

import styles from './RegionPage.module.scss'

export function RegionPage(){
    return (
        <>
        <Header/>
        <main>
            <div className='imageRegion'>
                <img src="src\assets\" alt="" />
            </div>
        </main>
        <Footer/>
        </>
    )
}