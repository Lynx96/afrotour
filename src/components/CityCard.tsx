import styles from './CityCard.module.scss'

interface CityCardProps {
    cityImg: string
    cityName: string
    cityDensity: number
    cityArea: number
}
export function CityCard({
    cityImg,
    cityName,
    cityDensity,
    cityArea,

}: CityCardProps) {
    return (
        <li className={styles.cityCard}>
            <img src={cityImg} alt="" />
            <div>
                <h4>{cityName}</h4>
                <div className={styles.cityInfo}>
                    <p>{cityDensity} Habitantes</p>
                    <p>{cityArea} km²</p>
                </div>
            </div>
        </li>
    )
}