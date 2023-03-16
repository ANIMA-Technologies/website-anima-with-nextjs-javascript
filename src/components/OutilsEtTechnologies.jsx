import Image from 'next/image'
import Img from '../assets/images/devlogiciel/123 2.png'
import styles from '../styles/OutilsEtTechnologies.module.css'

const OutilsEtTechnologies = () => {
  return (
    <div className="container-fluid containerFluid">
      <div className="row align-items-center justify-content-center mt-5 mx-4 mx-md-0">
        <div className="col-12 w-md-75">
          <h2 className={`${styles.title}`}>Outils Et Technologies</h2>
          <p className={`${styles.description}`}>
            JAVA, HTML, XML, SQL, C ou encore PHP
          </p>
        </div>
        <div className="col-12 w-md-75 h-75 d-flex justify-content-center">
          <Image src={Img} alt="Img" className="w-100 h-75" />
        </div>
      </div>
    </div>
  )
}

export default OutilsEtTechnologies