import banner from "../../assets/banner.png"
import styles from "./Banner.module.css"

function Banner() {
  return (
    <div  className={styles.banner}>
      <img src={banner} alt="Banner" />

    </div>

  )
}

export default Banner