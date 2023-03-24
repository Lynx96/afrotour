import '../styles/global.scss'

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
                <div className={styles.regionInfo} style={{ backgroundImage: RegionImg }}>
                    <div>
                        <h1>{RegionName}</h1>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.contentInfo}>
                        <ul>
                            <li><p>{RegionStates}</p> <span>Estados</span>  </li>
                            <li> <p>{RegionPopulation} </p> <span>Habitantes</span> </li>
                            <li>  <p>{RegionCities}</p> <span>Cidades</span> </li>
                           
                        </ul>
                        <div className={styles.description}>
                            {RegionDescription}
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