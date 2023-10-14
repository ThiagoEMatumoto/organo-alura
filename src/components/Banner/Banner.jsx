import banner from "../../assets/banner.png"
import styles from "./Banner.module.css"

function Banner() {
  return (
    <img className={styles.banner} src={banner} alt="Banner" />
  )
}

export default Banner