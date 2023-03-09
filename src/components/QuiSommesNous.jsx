import styles from '../styles/QuiSommesNous.module.css';

const QuiSommesNous = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center px-4">
        <div className={`col-12 col-md-6 ${styles.imgQuiSommesNous}`}></div>
        <div className="col-12 col-md-6">
          <h2 className={styles.title}>Qui Sommes-Nous ?</h2>
          <p className={styles.description}>
            Chez ANIMA Technologie, nous sommes une équipe de développeurs passionnés qui 
            offrent des solutions informatiques innovantes pour aider les entreprises à 
            atteindre leurs objectifs commerciaux. Nous sommes spécialisés dans le développement web, 
            le développement mobile et le développement de logiciels sur mesure. 
            Nous avons une grande expertise dans les dernières technologies de programmation 
            pour offrir des solutions personnalisées et adaptées aux besoins de nos clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuiSommesNous;
