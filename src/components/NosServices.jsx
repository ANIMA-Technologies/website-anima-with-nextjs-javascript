import Image from 'next/image'
import Frame from '../assets/images/Frame.png'
import Frame1 from '../assets/images/Frame1.png'
import Frame3 from '../assets/images/Frame3.png'
import Frame4 from '../assets/images/Frame4.png'
import Frame5 from '../assets/images/Frame5.png'
import styles from '../styles/NosServices.module.css'

const NosServices = () => {
  return (
    <div className="container-fluid mt-5">
      <h2 className={`text-center ${styles.title}`}>Nos Services</h2>
      <div className={`mt-5 ${styles.services}`}>
        <div className={`row align-items-center justify-content-center px-4 ${styles.service}`}>
          <div className="col-12 col-md-8">
            <h2 className={`${styles.serviceTitle}`}>Développement web</h2>
            <p className={`${styles.serviceDescription}`}>
              Nous offrons des services de développement web personnalisés pour aider nos clients
               à créer des sites web performants, modernes et conviviaux. Nos services de développement 
               web comprennent la conception, la programmation et l&apos;intégration de sites web, 
               ainsi que l&apos;optimisation pour les moteurs de recherche (SEO).
            </p>
          </div>
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <Image src={Frame3} alt='frame3-img' className='w-100 h-auto' />
          </div>
        </div>
        {/* ******************************************************************************* */}
        <div className={`row align-items-center justify-content-center px-4 ${styles.service}`}>
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <Image src={Frame} alt='frame3-img' className='w-100 h-auto' />
          </div>
          <div className="col-12 col-md-8">
            <h2 className={`${styles.serviceTitle}`}>Développement MOBILE</h2>
            <p className={`${styles.serviceDescription}`}>
              Développement mobile : Nous proposons également des services de développement mobile 
              pour aider nos clients à créer des applications mobiles iOS et Android de haute qualité, 
              répondant aux besoins spécifiques de leur entreprise. Nous pouvons vous aider à concevoir, 
              programmer et déployer votre application mobile.
            </p>
          </div>
        </div>
        {/* ******************************************************************************* */}
        <div className={`row align-items-center justify-content-center px-4 ${styles.service}`}>
          <div className="col-12 col-md-8">
            <h2 className={`${styles.serviceTitle}`}>Développement de logiciels sur mesure</h2>
            <p className={`${styles.serviceDescription}`}>
              Développement de logiciels sur mesure : Nous offrons des services de développement de
               logiciels personnalisés pour répondre aux besoins spécifiques de votre entreprise. 
               Nous pouvons vous aider à créer des logiciels sur mesure pour la gestion de projet, 
               la gestion de la relation client (CRM), l&apos;automatisation des processus métier et bien 
               plus encore.
            </p>
          </div>
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <Image src={Frame1} alt='frame1-img' className='w-100 h-auto' />
          </div>
        </div>
        {/* ******************************************************************************* */}
        <div className={`row align-items-center justify-content-center px-4 ${styles.service}`}>
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <Image src={Frame4} alt='frame4-img' className='w-100 h-auto' />
          </div>
          <div className="col-12 col-md-8">
            <h2 className={`${styles.serviceTitle}`}>Conseils et consultation</h2>
            <p className={`${styles.serviceDescription}`}>
              Conseils et consultation : Nous proposons également des services de consultation pour 
              aider les entreprises à élaborer des stratégies informatiques efficaces et adaptées à 
              leurs besoins spécifiques. Nous pouvons vous aider à planifier votre stratégie 
              informatique, à élaborer un plan d&apos;action et à choisir les technologies appropriées 
              pour votre entreprise.
            </p>
          </div>
        </div>
        {/* ******************************************************************************* */}
        <div className={`row align-items-center justify-content-center px-4 ${styles.service}`}>
          <div className="col-12 col-md-8">
            <h2 className={`${styles.serviceTitle}`}>Design de marque</h2>
            <p className={`${styles.serviceDescription}`}>
              Nous pouvons également aider les entreprises à créer des identités de marque cohérentes
              et attrayantes pour leurs sites web et applications mobiles. Nous travaillons avec les
              clients pour créer des conceptions de logos, des palettes de couleurs, des typographies
              et des styles visuels cohérents pour aider les entreprises à se différencier de la
              concurrence et à renforcer leur marque.
            </p>
          </div>
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <Image src={Frame5} alt='frame5-img' className='w-100 h-auto' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NosServices