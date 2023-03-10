import styles from './App.module.scss'
import './styles/global.scss'
import wppIcon from './assets/wppsvg.svg'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

import FriendsImage from './assets/friends.png'
import { RegionCard } from './components/RegionCard'

function App() {
  return (
    <>
      <Header />
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
            <h1>
              Para onde vamos?
            </h1>          
              <RegionCard
                regionName="Nordeste"
                regionTour='Passeios - praias - carnaval'
                regionPrice={299.90}
                regionImg='src\assets\nordeste.png'
              /* regionLink='' */ />
              <RegionCard
                regionName="Sudeste"
                regionTour='Passeios - praias - carnaval'
                regionPrice={599.90}
                regionImg='src\assets\sudeste.png' />
              <RegionCard
                regionName="Norte"
                regionTour='Passeios - praias - carnaval'
                regionPrice={199.90}
                regionImg='src\assets\norte.png' />
              <RegionCard
                regionName="Sul"
                regionTour='Passeios - praias - carnaval'
                regionPrice={199.90}
                regionImg='src\assets\sul.png' />
              <RegionCard
                regionName="Centro-Oeste"
                regionTour='Passeios - praias - carnaval'
                regionPrice={199.90}
                regionImg='src\assets\centrooeste.png' />           
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
