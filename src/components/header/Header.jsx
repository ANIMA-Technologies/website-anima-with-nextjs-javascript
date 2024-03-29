import Link from "next/link"
import styles from "../../styles/Header.module.css"
const Header = () => {
  return (
    <>
      <div className={`container-fluid containerFluid bgGradient img-fluid ${styles.banner}`}>
        <div className={styles.banner1}>
          <div className={styles.banner_text1}>
          <p className={styles.text_banner}>
            <span className={styles.anima}>Anima<br /></span> <span className={styles.techno}> Technologie </span>
          </p>
          <p className={styles.text_banner1}>Créer un avenir numérique solide avec nos services de développement informatique de pointe </p>
          <div className={styles.boutton2}>
            <button className={styles.btn_header}>
              <div className={styles.i_btn}>
                <i className='fa fa-calendar'  id={styles.i_btn}></i>
              </div>
              <div className={styles.p_btn}>
                <p><Link href="/contact">Besoin de plus d’informations ?</Link></p>
              </div>         
            </button>
            <button className={styles.btn_header1}>
              <div className={styles.i_btn1}>
                <i className="fa fa-phone" id={styles.i_btn}></i>
              </div>
              <div className={styles.p_btn1}> 
                <p><a href="tel:+261389266420">Discutons de vos projets !</a></p>
              </div>         
            </button>
          </div>
        </div>
        </div>
      </div>
    </>
    
  )
}

export default Header