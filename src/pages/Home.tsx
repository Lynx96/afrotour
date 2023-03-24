import styles from './Home.module.scss'
import wppIcon from '../assets/wppsvg.svg'
import FriendsImage from '../assets/friends.png'
import { RegionCard } from '../components/RegionCard'
import { Title } from '../components/Title'


export function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.welcome}>
        <div className={styles.welcomeContent}>
          <div>
            <span>
              Boas vindas à AfroTour
            </span>
            <h1>
              Sua viagem {'\n'}dos sonhos é aqui.
            </h1>
            <p>
              Estamos empenhados em fornecer os melhores planos de viagem do Brasil para você
            </p>
            <div>
              <button> <img src={wppIcon} alt="" />
                Agende sua viagem
              </button>
            </div>
          </div>
          <img src={FriendsImage} alt="AfroTour" />
        </div>
      </div>
      <div>
        <div className={styles.welcomeRegions}>
          <Title>Para onde vamos?</Title>
          <RegionCard
            regionName="Nordeste"
            regionTour='Passeios - praias - carnaval'
            regionPrice={299.90}
            regionImg='src\assets\nordeste.png'
            regionLink='/nordeste' />
          <RegionCard
            regionName="Sudeste"
            regionTour='Passeios - praias - carnaval'
            regionPrice={599.90}
            regionImg='src\assets\sudeste.png'
            regionLink='/sudeste' />
          <RegionCard
            regionName="Norte"
            regionTour='Passeios - praias - carnaval'
            regionPrice={199.90}
            regionImg='src\assets\norte.png'
            regionLink='/norte' />
          <RegionCard
            regionName="Sul"
            regionTour='Passeios - praias - carnaval'
            regionPrice={199.90}
            regionImg='src\assets\sul.png'
            regionLink='/sul' />
          <RegionCard
            regionName="Centro-Oeste"
            regionTour='Passeios - praias - carnaval'
            regionPrice={199.90}
            regionImg='src\assets\centrooeste.png'
            regionLink='/centrooeste' />
        </div>
      </div>
    </main>
  )
}