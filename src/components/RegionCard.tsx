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
    regionImg
}: RegionCardProps) {
    return (
        <div className={styles.regionCard}>            
                <img src={regionImg} alt="" />            
                <h2> {regionName}</h2>                
            <div className={styles.regionContent}>
                    <h4> {regionTour}</h4>
                    <span> À partir de R$ {regionPrice}</span>
            </div>

        </div>
    )
}