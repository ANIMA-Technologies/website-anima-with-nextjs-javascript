import Ruban from '@/components/Ruban'
import Image from 'next/image'
import Img1 from '../../../src/assets/images/devweb/1.png'
import Img2 from '../../../src/assets/images/devweb/2.png'
import Img3 from '../../../src/assets/images/devweb/3.png'
import Img4 from '../../../src/assets/images/devweb/4.png'
import Img5 from '../../../src/assets/images/devweb/5.png'
import Bg from '../../../src/assets/images/devweb/bg.png'
import styles from '../../styles/DevWeb.module.css'

const DevWeb = () => {
  return (
    <div className="container-fluid containerFluid bgGradient">
      <div className="row flex-column-reverse flex-md-row align-items-center justify-content-center px-4">
        <div className="col-12 col-md-6">
          <h2 className={`d-none d-md-block ${styles.title}`}>
            Développement <br />
            <span>Web</span>
          </h2>
          <p className={styles.description}>
            Un site web est la base d&apos;une forte présence en ligne car il permet de présenter
            les produits ou services d&apos;une entreprise, de communiquer avec les clients,
            d&apos;améliorer la visibilité en ligne et d&apos;offrir une expérience utilisateur complète.
          </p>
        </div>
        <div className={`col-12 col-md-6 ${styles.imgDevWeb}`}>
          <h2 className={`d-md-none ${styles.title}`}>
            Développement <br />
            <span>Web</span>
          </h2>
          <Image src={Bg} alt="Bg" className="w-100 h-100" />
        </div>
      </div>
      <Ruban />
      <div className="row align-items-center justify-content-center px-4">
        <div className={`col-12 col-md-6 ${styles.imgDevWeb}`}>
          <Image src={Img1} alt="" className="w-100 h-100" />
        </div>
        <div className="col-12 col-md-6">
          <h2 className={styles.title2}>
            Développement web sur mesure
          </h2>
          <p className={styles.description2}>
            Le développement web sur mesure est crucial pour toute entreprise qui veut se démarquer
            dans un monde en ligne saturé. Un site Web sur mesure permet de créer une expérience
            utilisateur unique et personnalisée pour les visiteurs, qui reflète l&apos;identité de
            votre entreprise et améliore votre image de marque. En plus de cela, les sites Web
            sur mesure peuvent être facilement adaptés pour répondre aux besoins de votre
            entreprise à mesure qu&apos;elle se développe, ce qui les rend plus évolutifs et plus
            rentables à long terme.Les sites Web sur mesure sont également plus sécurisés que
            les sites Web standard, car ils sont construits pour éliminer les failles de sécurité
            et les erreurs de codage, qui sont souvent présentes dans les modèles standard.
            En outre, les sites Web sur mesure sont optimisés pour les moteurs de recherche,
            ce qui améliore leur visibilité en ligne et leur capacité à attirer du trafic organique.
            En fin de compte, le développement web sur mesure offre de nombreux avantages pour les
            entreprises, notamment une personnalisation accrue, une évolutivité améliorée, une
            meilleure sécurité et des performances supérieures. Si vous cherchez à améliorer
            votre présence en ligne et à renforcer votre image de marque, il est temps de passer
            au développement web sur mesure.
          </p>
        </div>
      </div>
      <div className="row align-items-center justify-content-center mt-5 m-4 m-md-0">
        <div className="col-12 px-0 w-md-75">
          <h2 className={`${styles.title3}`}>Quelles sont les étapes du développement d&apos;une application web?</h2>
          <p className={`${styles.description3}`}>
            Les grandes étapes du développement d&apos;une application web sont importantes car elles
            permettent de suivre un processus structuré et méthodique pour créer une application
            web fonctionnelle, performante et répondant aux besoins des utilisateurs.
          </p>
        </div>
      </div>
      <div className={`row align-items-center justify-content-center m-4 m-md-0 px-0 ${styles.description4}`}>
        <div className={`col-12 col-md-6 px-0 ${styles.imgDevWeb}`}>
          <Image src={Img2} alt="" className="w-100 h-100 px-0" />
        </div>
        <div className={`col-12 col-md-6`}>
          <p>
            <span className={styles.subtitleDescription4}>Définition des objectifs : </span>La première étape consiste à définir les objectifs de
            l&apos;application web, les besoins des utilisateurs et les exigences fonctionnelles.
            Cette étape permet de déterminer les fonctionnalités clés de l&apos;application et
            de comprendre les attentes des utilisateurs.
          </p>
        </div>
      </div>
      <div className={`row flex-column-reverse flex-md-row align-items-center justify-content-center m-4 m-md-0 px-0 ${styles.description5}`}>
        <div className={`col-12 col-md-6`}>
          <p>
            <span className={styles.subtitleDescription4}>Rédaction du cahier des charges : </span>
            Cette étape consiste à documenter les spécifications fonctionnelles et techniques de
            l&apos;application web. Le cahier des charges permet de formaliser les besoins et les
            attentes du client et de définir les exigences du projet.
          </p>
        </div>
        <div className={`col-12 col-md-6 px-0 ${styles.imgDevWeb}`}>
          <Image src={Img3} alt="" className="w-100 h-100 px-0" />
        </div>
      </div>
      <div className={`row align-items-center justify-content-center m-4 m-md-0 px-0 ${styles.description5}`}>
        <div className={`col-12 col-md-6 px-0 ${styles.imgDevWeb}`}>
          <Image src={Img4} alt="img-4" className="w-100 h-100 px-0" />
        </div>
        <div className={`col-12 col-md-6`}>
          <p>
            <span className={styles.subtitleDescription4}>Développement de l&apos;application : </span>
            Cette étape consiste à écrire le code pour créer
            l&apos;application web. Elle comprend la mise en place de la structure, l&apos;architecture du code,
            le développement des fonctionnalités, la configuration de la base de données,
            l&apos;intégration de services tiers, le développement de l&apos;interface utilisateur et
            le test des fonctionnalités.
          </p>
        </div>
      </div>
      <div className={`row flex-column-reverse flex-md-row align-items-center justify-content-center mx-4 mx-md-0 px-0 ${styles.description6}`}>
        <div className={`col-12 col-md-6`}>
          <p>
            <span className={styles.subtitleDescription4}>Déploiement : </span>
            Cette étape consiste à installer l&apos;application web sur un serveur et à le rendre
            disponible au public. Elle inclut la configuration du serveur, l&apos;installation
            de la base de données, la publication du contenu et la mise en ligne de l&apos;application.
          </p>
        </div>
        <div className={`col-12 col-md-6 px-0 ${styles.imgDevWeb}`}>
          <Image src={Img5} alt="Img5" className="w-100 h-100 px-0" />
        </div>
      </div>
    </div>
  )
}

export default DevWeb