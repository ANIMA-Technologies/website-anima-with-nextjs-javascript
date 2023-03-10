import styles from '../../styles/DevWeb.module.css'

const DevWeb = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center px-4">
        <div className="col-12 col-md-6">
          <h2 className={styles.title}>
            Développement <br />
            <span>Web</span>
          </h2>
          <p className={styles.description}>
            Un site web est la base d&apos;une forte présence en ligne car il permet de présenter
            les produits ou services d&apos;une entreprise, de communiquer avec les clients,
            d&apos;améliorer la visibilité en ligne et d&apos;offrir une expérience utilisateur complète.
          </p>
        </div>
        <div className={`col-12 col-md-6 ${styles.imgDevWeb}`}></div>
      </div>
    </div>
  )
}

export default DevWeb