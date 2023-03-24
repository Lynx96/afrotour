import {useNavigate} from 'react-router-dom'
import styles from './RegionCard.module.scss'


interface RegionCardProps {
    regionName: string
    regionTour: string
    regionPrice: number
    regionImg: string   
    regionLink: string
}
export function RegionCard({
    regionName,
    regionTour,
    regionPrice,
    regionImg,
    regionLink
}: RegionCardProps) {
    const navigate = useNavigate();
    /* const handleNavigate = () =>{
        let path = `newPath`;
        navigate({regionLink});

    } */
    return (
        <div className={styles.regionContainer}>

            <div className={styles.regionCard} onClick={()=>navigate(regionLink)}>
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