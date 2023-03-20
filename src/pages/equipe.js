import Equipes from '@/components/Equipes'
import Image from 'next/image'
import JulienColomb from '../assets/images/equipe/Julien Colomb.png'
import Bg from '../assets/images/equipe/bg.png'
import styles from '../styles/Equipe.module.css'

const Equipe = () => {
  return (
    <div className={`container-fluid ${styles.equipe}`}>
      <div className="row align-items-center justify-content-center h-100">
        <h2 className={`${styles.title}`}>rencontrer <br /> notre équipe</h2>
        <Image src={JulienColomb} alt='Julien Colomb' className={`w-100 ${styles.bg}`} />
        <Image src={Bg} alt='Bg image' className={`h-100 ${styles.bg} ${styles.bg1}`} />
      </div>
      <div className={`row ${styles.equipes}`}>
        <Equipes />
      </div>
    </div>
  )
}

export default Equipe