import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { RegionPage } from './pages/RegionPage';


export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/regionPage" element={<RegionPage/>}/>
        </Routes>
    )
}