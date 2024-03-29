import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { RegionPage } from './components/RegionPage';


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/norte" element={<RegionPage
                RegionName='Norte'
                RegionImg='url(https://www.segueviagem.com.br/wp-content/uploads/2016/08/shutterstock_747350509-scaled.jpg)'
                RegionCities={300}
                RegionDescription='lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem '
                RegionPopulation='351 145'
                RegionStates={8} />} />
            <Route path="/nordeste" element={<RegionPage
                RegionName='Nordeste'
                RegionImg='url(https://casalnomade.com/wp-content/uploads/2020/01/praia-do-sancho-em-fernando-de-noronha-e-a-melhor-praia-do-mundo-segundo-tripadvisor-1488849726684_v2_1920x1269.jpg)'
                RegionCities={500}
                RegionDescription='Lorem ipsomL oremipsom LoremipsomLor emipsomLoremipsomL oremipsomLorem ipsomLorem ipsomLorem ipsomLoremips omLoremipso mLoremipsom Loremip som'
                RegionPopulation='484 545'
                RegionStates={9} />} />
            <Route path="/sul" element={<RegionPage
                RegionName='Sul'
                RegionImg='url(https://i0.statig.com.br/bancodeimagens/45/h6/uh/45h6uhpqj1mo9q19mvogsuxlf.jpg)'
                RegionCities={112}
                RegionDescription='Lore mipsomLo remipsomLore mipsomLorem ipsomLoremips omLoremipso mLoremipsomL oremipsomLo remipsomLoremipsomLoremipsomLoremipsomLoremipsom'
                RegionPopulation='110 145'
                RegionStates={4} />} />
            <Route path="/sudeste" element={<RegionPage
                RegionName='Sudeste'
                RegionImg='url(https://images.unsplash.com/photo-1554168848-228452c09d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)'
                RegionCities={498}
                RegionDescription='LoremipsomLoremipsomLoremipsomLoremipsomLoremipsomLoremipsomLoremipsomLoremipsomLoremipsomLoremipsomLoremipsomLoremipsomLoremipsom'
                RegionPopulation='1 005 849'
                RegionStates={4} />} />
            <Route path="/centrooeste" element={<RegionPage
                RegionName='Centro-Oeste'
                RegionImg='url(https://th.bing.com/th/id/R.e9c67254f12a5f37f341ee1a4b1742f4?rik=TQV%2fEHmjRGiYBA&pid=ImgRaw&r=0)'
                RegionCities={415}
                RegionDescription='LoremipsomLoremipsomLoremipsomLoremipsomLoremipsomLoremipsomLoremipsomLoremipsomLoremipsomLoremipsomLoremipsomLoremipsomLoremipsom'
                RegionPopulation='878 646'
                RegionStates={6} />} />
        </Routes>
    )
}