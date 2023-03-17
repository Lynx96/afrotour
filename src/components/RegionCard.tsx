import {useNavigate} from 'react-router-dom'
import styles from './RegionCard.module.scss'


interface RegionCardProps {
    regionName: string
    regionTour: string
    regionPrice: number
    regionImg: string   
}
export function RegionCard({
    regionName,
    regionTour,
    regionPrice,
    regionImg,
}: RegionCardProps) {
    const navigate = useNavigate();
    function handleNavigate(){
        navigate('./regionPage');
        navigate('./regionPage')


    }
    return (
        <div className={styles.regionContainer}>

            <div className={styles.regionCard} onClick={handleNavigate}>
                <img src={regionImg} alt="" />
                <h2> {regionName}</h2>
                <div className={styles.regionContent}>
                    <h4> {regionTour}</h4>
                    <p> À partir de  <span className='priceStyle'>R$ {regionPrice}</span></p>
                </div>

            </div>
        </div>
    )
}