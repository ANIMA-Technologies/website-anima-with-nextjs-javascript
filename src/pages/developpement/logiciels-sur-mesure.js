import Ruban from "@/components/Ruban"
import Image from "next/image"

import OutilsEtTechnologies from "@/components/OutilsEtTechnologies"
import Img1 from '../../../src/assets/images/devlogiciel/1.png'
import Img2 from '../../../src/assets/images/devlogiciel/2.png'
import Img3 from '../../../src/assets/images/devlogiciel/3.png'
import Img4 from '../../../src/assets/images/devlogiciel/4.png'
import Bg from '../../../src/assets/images/devlogiciel/bg.png'
import styles from '../../styles/DevLogiciel.module.css'

const DevLogicielSurMesure = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center px-4">
        <div className="col-12 col-md-6">
          <h2 className={styles.title1}>
            Développement <br />
            <span>de logiciels</span>
          </h2>
          <p className={styles.description1}>
            Le logiciel offre de nombreux avantages aux entreprises et aux utilisateurs.
            En effet, les logiciels peuvent aider à réduire les coûts, à améliorer la productivité,
            à personnaliser les processus métier, à gérer les données de manière plus efficace et
            à stimuler l&apos;innovation.
          </p>
        </div>
        <div className={`col-12 col-md-6 ${styles.imgDevWeb}`}>
          <Image src={Bg} alt="" className="w-100 h-100" />
        </div>
      </div>
      <Ruban />
      <div className="row align-items-center justify-content-center mt-5">
        <div className="col-12 w-75">
          <h2 className={`${styles.title2}`}>Avantage de Logiciel Sur Mesure</h2>
          <p className={`${styles.description2}`}>
            Les grandes étapes du développement d&apos;une application mobile sont importantes car
            elles permettent de suivre un processus structuré et méthodique pour créer une
            application web fonctionnelle, performante et répondant aux besoins des utilisateurs.
          </p>
        </div>
      </div>
      <div className={`row align-items-center justify-content-center px-0 ${styles.description3}`}>
        <div className={`col-12 col-md-6 px-0 ${styles.imgDevWeb}`}>
          <Image src={Img1} alt="Img1" className="w-100 h-100 px-0" />
        </div>
        <div className={`col-12 col-md-6`}>
          <p>
            La réduction des coûts est l&apos;un des avantages les plus importants de la création
            de logiciels. En automatisant des tâches qui étaient auparavant effectuées manuellement,
            les entreprises peuvent économiser du temps et de l&apos;argent. De plus, les logiciels
            peuvent aider à réduire les erreurs humaines, ce qui peut améliorer l&apos;efficacité
            globale des processus métier.
          </p>
        </div>
      </div>
      <div className={`row align-items-center justify-content-center px-0 ${styles.description4}`}>
        <div className={`col-12 col-md-6`}>
          <p>
            L&apos;amélioration de la productivité est un autre avantage de la création de logiciels.
            Les logiciels peuvent aider les utilisateurs à travailler plus efficacement en
            automatisant des tâches et en offrant des fonctionnalités qui permettent de gagner du temps.

          </p>
        </div>
        <div className={`col-12 col-md-6 px-0 ${styles.imgDevWeb}`}>
          <Image src={Img2} alt="Img2" className="w-100 h-100 px-0" />
        </div>
      </div>
      <div className={`row align-items-center justify-content-center px-0 ${styles.description5}`}>
        <div className={`col-12 col-md-6 px-0 ${styles.imgDevWeb}`}>
          <Image src={Img3} alt="Img3" className="w-100 h-100 px-0" />
        </div>
        <div className={`col-12 col-md-6`}>
          <p>
            Les logiciels peuvent également être personnalisés pour répondre aux besoins
            spécifiques des utilisateurs. Par exemple, un logiciel de comptabilité peut être
            personnalisé pour répondre aux exigences d&apos;une entreprise en particulier. Cela permet
            aux entreprises de gérer leur activité de manière plus efficace et de mieux
            s&apos;adapter aux besoins changeants de leur marché.
          </p>
        </div>
      </div>
      <div className={`row align-items-center justify-content-center px-0 ${styles.description6}`}>
        <div className={`col-12 col-md-6`}>
          <p>
            La gestion des données est également un avantage important de la création de logiciels.
            Les logiciels peuvent aider à stocker et à gérer des données de manière plus efficace,
            ce qui peut améliorer la qualité des données et faciliter l&apos;accès à ces dernières.
            Cela peut être particulièrement important pour les entreprises qui ont besoin d&apos;accéder
            à des données en temps réel pour prendre des décisions éclairées
          </p>
          <p>
            La création de logiciels peut également stimuler l&apos;innovation en permettant aux entreprises
            de développer de nouveaux produits et services plus rapidement et plus efficacement.
            Les logiciels peuvent offrir une meilleure expérience utilisateur en fournissant des
            interfaces utilisateur conviviales et en facilitant la navigation.
            En somme, la création de logiciels peut offrir de nombreux avantages aux entreprises
            et aux utilisateurs, notamment en améliorant l&apos;efficacité, la productivité et la qualité
            des processus métier. C&apos;est pourquoi de plus en plus d&apos;entreprises investissent dans
            le développement de logiciels sur mesure pour répondre à leurs besoins spécifiques.
          </p>
        </div>
        <div className={`col-12 col-md-6 px-0 ${styles.imgDevWeb}`}>
          <Image src={Img4} alt="Img4" className="w-100 h-100 px-0" />
        </div>
      </div>
      <OutilsEtTechnologies />
    </div>
  )
}

export default DevLogicielSurMesure