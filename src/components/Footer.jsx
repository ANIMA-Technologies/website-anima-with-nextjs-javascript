import Image from 'next/image'
import Facebook from '../assets/icons/Facebook.png'
import Instagram from '../assets/icons/Instagram.png'
import Linkedin from '../assets/icons/Linkedin.png'
import Mail from '../assets/icons/Mail.png'
import Phone from '../assets/icons/Phone.png'
import Twitter from '../assets/icons/Twitter.png'
import LogoFooter from '../assets/images/LogoFooter.png'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={`container-fluid gx-0 sticky-bottom ${styles.footerContainer}`}>
      <div className="row gx-0 h-100 align-items-center justify-content-center">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center">
          <div className={`ms-5 ${styles.joinUs}`}>
            <h2>JOIGNEZ-NOTRE ÉQUIPE</h2>
            <p>
              ANIMA Technologie est une entreprise de développement informatique qui propose de 
              solution tel que le développement web, développement mobile et UI/UX design.
            </p>
            <form>
              <input type="email" placeholder="Entrer votre adresse e-mail" className={styles.inputEmail} />
              <button type="submit" className={styles.btnEmail}>E-mail</button>
            </form>
          </div>
         
          <div className={`d-flex gap-4 mt-5 ${styles.pageReseauxSociaux}`}>
            <a href="http://">
              <Image src={Instagram} alt='Instagram icon' />
            </a>
            <a href="http://">
              <Image src={Facebook} alt='Facebook icon' />
            </a>
            <a href="http://">
              <Image src={Linkedin} alt='Linkedin icon' />
            </a>
            <a href="http://">
              <Image src={Twitter} alt='Twitter icon' />
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
          <Image src={LogoFooter} alt="LogoFooter" className={`w-50 ${styles.footerLogo}`} />
          <div className={`mt-5 d-flex flex-wrap gap-1 ${styles.contact}`}>
            <a href="tel:+261346215300">
              <Image src={Phone} alt='Phone icon' />
              <span className="ms-1">+261 33 00 000 00 / +261 34 00 000 00</span>
            </a>
            <a href="mailto:anima.gascar@gmail.com">
              <Image src={Mail} alt='Mail icon' />
              <span className="ms-1">anima.gascar@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer