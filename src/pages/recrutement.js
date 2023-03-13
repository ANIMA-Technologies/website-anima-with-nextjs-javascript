import Image from 'next/image'
import Link from 'next/link'
import Img1 from '../assets/images/recrutement/1.png'
import Img2 from '../assets/images/recrutement/2.png'
import Img3 from '../assets/images/recrutement/3.png'
import Img4 from '../assets/images/recrutement/4.png'
import styles from '../styles/Recrutement.module.css'

const Recrutement = () => {
  return (
    <div className={`w-100 ${styles.recrutement}`}>
      <div className={`row align-items-center justify-content-center ${styles.header}`}>
        <h2 className={`${styles.title}`}>Nos <br /> recrutements</h2>
        <div>
          <p>
            Rejoignez-nous
          </p>
          <p>
            Opportunités proposées par l’agence web Sokeo. Postes basés à Marseille 13001
          </p>
        </div>
      </div>
      <div className="row align-items-center justify-content-center px-4">
        <div className="col-12 col-md-6">
          <h2 className={styles.recrutementTitle}>
            Développeur PHP Back End à Marseille en CDI
          </h2>
          <p className={styles.recrutementDescription}>
            Missions Développement de nouveaux outils internes ou sites web Réaliser les tests et corriger les anomalies Assurer la maintenance et l’évolution des applications Participer aux
            Missions Développement de nouveaux outils internes ou sites web Réaliser les tests et corriger les anomalies Assurer la maintenance et l’évolution des applications Participer aux
            Missions Développement de nouveaux outils internes ou sites web Réaliser les tests et corriger les anomalies Assurer la maintenance et l’évolution des applications Participer aux
          </p>
          <Link className={`${styles.btnVoirOffre}`} href="/recrutement/titre-offre">Voir l&apos;offre</Link>
        </div>
        <div className={`col-12 col-md-6 ${styles.imgDevWeb}`}>
          <Image src={Img1} alt="Image 1" className="w-100 h-100" />
        </div>
      </div>
      <div className="row align-items-center justify-content-center px-4">
        <div className={`col-12 col-md-6 ${styles.imgDevWeb}`}>
          <Image src={Img2} alt="Image 2" className="w-100 h-100" />
        </div>
        <div className="col-12 col-md-6">
          <h2 className={styles.recrutementTitle}>
            Stage Développement web Marseille
          </h2>
          <p className={styles.recrutementDescription}>
            Missions Développement pour nos clients ou nos projets internes Tests et recettes Mise en production Maintenance corrective et évolutive Ce stage est idéal pour les
            Missions Développement pour nos clients ou nos projets internes Tests et recettes Mise en production Maintenance corrective et évolutive Ce stage est idéal pour les
            Missions Développement pour nos clients ou nos projets internes Tests et recettes Mise en production Maintenance corrective et évolutive Ce stage est idéal pour les
          </p>
          <Link className={`float-end ${styles.btnVoirOffre}`} href="/recrutement/titre-offre">Voir l&apos;offre</Link>
        </div>
      </div>
      <div className="row align-items-center justify-content-center px-4">
        <div className="col-12 col-md-6">
          <h2 className={styles.recrutementTitle}>
            Développeur PHP Back End à Marseille en CDI
          </h2>
          <p className={styles.recrutementDescription}>
            Missions Développement de nouveaux outils internes ou sites web Réaliser les tests et corriger les anomalies Assurer la maintenance et l’évolution des applications Participer aux
            Missions Développement de nouveaux outils internes ou sites web Réaliser les tests et corriger les anomalies Assurer la maintenance et l’évolution des applications Participer aux
            Missions Développement de nouveaux outils internes ou sites web Réaliser les tests et corriger les anomalies Assurer la maintenance et l’évolution des applications Participer aux
          </p>
          <Link className={`${styles.btnVoirOffre}`} href="/recrutement/titre-offre">Voir l&apos;offre</Link>
        </div>
        <div className={`col-12 col-md-6 ${styles.imgDevWeb}`}>
          <Image src={Img3} alt="Image 3" className="w-100 h-100" />
        </div>
      </div>
      <div className="row align-items-center justify-content-center px-4">
        <div className={`col-12 col-md-6 ${styles.imgDevWeb}`}>
          <Image src={Img4} alt="Image 4" className="w-100 h-100" />
        </div>
        <div className="col-12 col-md-6">
          <h2 className={styles.recrutementTitle}>
            Stage Développement web Marseille
          </h2>
          <p className={styles.recrutementDescription}>
            Missions Développement pour nos clients ou nos projets internes Tests et recettes Mise en production Maintenance corrective et évolutive Ce stage est idéal pour les
            Missions Développement pour nos clients ou nos projets internes Tests et recettes Mise en production Maintenance corrective et évolutive Ce stage est idéal pour les
            Missions Développement pour nos clients ou nos projets internes Tests et recettes Mise en production Maintenance corrective et évolutive Ce stage est idéal pour les
          </p>
          <Link className={`float-end ${styles.btnVoirOffre}`} href="/recrutement/titre-offre">Voir l&apos;offre</Link>
        </div>
      </div>
    </div>
  )
}

export default Recrutement