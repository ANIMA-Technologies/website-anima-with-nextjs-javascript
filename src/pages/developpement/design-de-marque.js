import Ruban from "@/components/Ruban"
import Image from "next/image"
import Bg from '../../../src/assets/images/designdemarque/bgimage.png'
import Img1 from '../../../src/assets/images/designdemarque/img1.png'
import Img2 from '../../../src/assets/images/designdemarque/img2.png'
import Img3 from '../../../src/assets/images/designdemarque/img3.png'
import Img4 from '../../../src/assets/images/designdemarque/img4.png'
import Img5 from '../../../src/assets/images/designdemarque/img5.png'
import styles from '../../styles/DesignDeMarque.module.css'

const DesignDeMarque = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center px-4 mb-5">
        <div className="col-12 col-md-6">
          <h2 className={styles.title1}>
            Design <br />
            <span>de marque</span>
          </h2>
          <p className={styles.description1}>
            L’UX et l’UI sont essentiels pour votre site web car ils peuvent aider à
            attirer des visiteurs, réduire les taux de rebond, augmenter le temps de visite,
            améliorer les taux de conversion et créer une image de marque forte.
            En investissant dans la conception UX/UI de votre site web ou application mobile,
            vous pouvez améliorer l’expérience utilisateur et augmenter les chances de réussite
            de votre entreprise en ligne.
          </p>
        </div>
        <div className={`col-12 col-md-6 ${styles.imgDevWeb}`}>
          <Image src={Bg} alt="" className="w-100 h-100" />
        </div>
      </div>
      <Ruban />
      <div className="row align-items-center justify-content-center px-4">
        <div className={`col-12 col-md-6 ${styles.imgDevWeb}`}>
          <Image src={Img1} alt="" className="w-75 h-auto" />
        </div>
        <div className="col-12 col-md-6">
          <h2 className={styles.title2}>
            UI & uX
          </h2>
          <p className={styles.description2}>
            L’expérience utilisateur (UX) et l’interface utilisateur (UI) sont des éléments clés
            pour tout site web réussi. L’UX concerne la façon dont les utilisateurs interagissent
            avec votre site web, tandis que l’UI est la conception visuelle et la présentation de
            votre site. Ensemble, ces deux éléments forment l’expérience globale de votre site web
            pour l’utilisateur.
          </p>
        </div>
      </div>
      <div className="row align-items-center justify-content-center my-5">
        <div className="col-12 w-75">
          <h2 className={`${styles.title3}`}>
            Quelles sont les étapes du design de marque?
          </h2>
        </div>
      </div>
      <div className={`row align-items-center justify-content-center px-0 ${styles.description4}`}>
        <div className={`col-12 col-md-6 px-0 ${styles.imgDevWeb}`}>
          <Image src={Img2} alt="" className="w-100 h-100 px-0" />
        </div>
        <div className={`col-12 col-md-6`}>
          <p>
            <span className={styles.subtitleDescription4}>Attirer des visiteurs : </span>
            Un design attrayant et une navigation facile peuvent attirer
            plus de visiteurs sur votre site web. Si votre site est difficile à naviguer ou à
            comprendre, les utilisateurs seront plus enclins à quitter votre site plutôt que de
            continuer à explorer.
          </p>
        </div>
      </div>
      <div className={`row align-items-center justify-content-center px-0 ${styles.description5}`}>
        <div className={`col-12 col-md-6`}>
          <p>
            <span className={styles.subtitleDescription4}>Réduire les taux de rebond : </span>
            Un taux de rebond élevé signifie que les visiteurs quittent
            rapidement votre site web après y être arrivés. Un design optimisé UX/UI peut aider à
            réduire ces taux de rebond en créant une expérience utilisateur plus agréable et plus
            facile à utiliser.
          </p>
        </div>
        <div className={`col-12 col-md-6 px-0 ${styles.imgDevWeb}`}>
          <Image src={Img3} alt="" className="w-100 h-100 px-0" />
        </div>
      </div>
      <div className={`row align-items-center justify-content-center px-0 ${styles.description5}`}>
        <div className={`col-12 col-md-6 px-0 ${styles.imgDevWeb}`}>
          <Image src={Img4} alt="img-4" className="w-100 h-100 px-0" />
        </div>
        <div className={`col-12 col-md-6`}>
          <p>
            <span className={styles.subtitleDescription4}>Augmenter le temps de visite : </span>
            Les utilisateurs qui trouvent votre site web facile à naviguer et à utiliser sont plus
            susceptibles de passer plus de temps sur votre site web. Cela peut se traduire par une
            augmentation du temps passé à explorer vos produits et services, ce qui peut finalement
            conduire à une conversion plus élevée.
          </p>
        </div>
      </div>
      <div className={`row align-items-center justify-content-center px-0 ${styles.description6}`}>
        <div className={`col-12 col-md-6`}>
          <p>
            <span className={styles.subtitleDescription4}>Améliorer les taux de conversion : </span>
            Un design UX/UI efficace peut aider à améliorer les taux de conversion en créant
            une expérience utilisateur positive et en facilitant la navigation et la recherche
            de produits. Si les utilisateurs peuvent facilement trouver ce qu’ils cherchent,
            ils sont plus susceptibles de convertir en clients payants.
          </p>
          <p>
            <span className={styles.subtitleDescription4}>Créer une image de marque forte : </span>
            Un design de qualité peut aider à créer une image de marque forte et cohérente.
            Un site web bien conçu et facile à utiliser peut donner une impression positive de
            votre entreprise, tandis qu’un site web mal conçu peut nuire à votre image de marque.
          </p>
        </div>
        <div className={`col-12 col-md-6 px-0 ${styles.imgDevWeb}`}>
          <Image src={Img5} alt="Img5" className="w-75 h-auto px-0" />
        </div>
      </div>
    </div>
  )
}

export default DesignDeMarque