import '../styles/global.scss'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import styles from './RegionPage.module.scss'
import { Title } from '../components/Title'
import { CityCard } from '../components/CityCard'

interface RegionPageProps {
    RegionImg: string
    RegionName: string
    RegionStates: number
    RegionPopulation: string
    RegionCities: number
    RegionDescription: string

}

export function RegionPage({
    RegionImg,
    RegionName,
    RegionStates,
    RegionPopulation,
    RegionCities,
    RegionDescription,
}: RegionPageProps) {
    return (
        <>
            <main>
                <div className={styles.regionInfo} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554168848-228452c09d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80")' }}>
                    <div>
                        {/* {RegionName}  */}
                        <h1>Sudeste</h1>
                    </div>
                </div>
                {/* <img src={RegionImg} alt="" /> */}
                <div className={styles.content}>
                    <div className={styles.contentInfo}>


                        <p>{RegionStates} <span>Estados</span> </p>
                        <p>{RegionPopulation} <span>Habitantes</span> </p>
                        <p>{RegionCities} <span>Cidades</span> </p>
                        <div className={styles.description}>

                            <p>{RegionDescription} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>
                    </div>


                    <div className={styles.cityList}>
                        <Title>Escolha uma cidade</Title>
                        <h3>Espirito Santo</h3>
                        <ul>
                            
                           <CityCard 
                           cityImg="https://images.unsplash.com/photo-1533029030467-904d7bbd602b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                           cityName='Vitoria'
                           cityDensity={452487} 
                           cityArea={845}
                           />
                           
                          
                        </ul>
                    </div>

                </div>




            </main>
        </>
    )
}