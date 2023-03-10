import styles from './RegionCard.module.scss'

interface RegionCardProps {
    regionName: string
    regionTour: string
    regionPrice: number
    regionImg: string
   /*  regionLink: string */
}
export function RegionCard({
    regionName,
    regionTour,
    regionPrice,
    regionImg,
   /*  regionLink */
}: RegionCardProps) {
    return (
       /* <a href={regionLink}> */

            <div className={styles.regionContainer}>

                <div className={styles.regionCard}>
                    <img src={regionImg} alt="" />
                    <h2> {regionName}</h2>
                    <div className={styles.regionContent}>
                        <h4> {regionTour}</h4>
                        <p> À partir de  <span className='priceStyle'>R$ {regionPrice}</span></p>
                    </div>

                </div>
            </div>

       /*  </a> */
    )
}