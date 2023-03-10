;import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import style from "../styles/StyleForAll.module.css";
const Navbar = () => {
  return (
    <div className={`"container-fluid" ${style.containerFluid}`}>
      <nav className="navbar navbar-expand-lg navbar-light">
 
          <Link className="navbar-brand" href="/">
            <Image src="/imagesAnima/Logo.png" className={styles.logo} alt="logo" width={50} height={50} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link  ${styles.navLink}  active`} aria-current="page" href="/">Accueil</Link>
              </li>
              
              <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle  ${styles.dropdownToggle}  ${styles.navLink}  active`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Développement Informatique
                  <i className="fa fa-angle-down ms-1 font-weight-bold" aria-hidden="true"></i>
                </a>
                <ul className={`dropdown-menu ${styles.dropdown1}`} aria-labelledby="navbarDropdown">
                  <li><Link className={`dropdown-item ${styles.dropdownItem} ${styles.dropdownItem0}`} href="/developpement/web">Développement web</Link></li>
                  <li><Link className={`dropdown-item ${styles.dropdownItem} ${styles.dropdownItem0}`} href="/developpement/mobile">Développement MOBILE</Link></li>
                  <li><Link className={`dropdown-item ${styles.dropdownItem} ${styles.dropdownItem0}`} href="/developpement/logiciels-sur-mesure">Développement de logiciels sur mesure</Link></li>
                  <li><Link className={`dropdown-item ${styles.dropdownItem} ${styles.dropdownItem0}`} href="/developpement/design-de-marque">Design de marque</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle ${styles.dropdownToggle}  ${styles.navLink}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  La société
                  <i className="fa fa-angle-down ms-1 font-weight-bold" aria-hidden="true"></i>
                </a>
                <ul className={`dropdown-menu ${styles.dropdown2}`} aria-labelledby="navbarDropdown">
                  <li><a className={`dropdown-item ${styles.dropdownItem} ${styles.dropdownItem1}`} href="#">Réalisations</a></li>
                  <li><a className={`dropdown-item ${styles.dropdownItem} ${styles.dropdownItem1}`} href="#">L’équipe</a></li>
                  <li><a className={`dropdown-item ${styles.dropdownItem} ${styles.dropdownItem1}`} href="#">Recrutement</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className={`nav-link  ${styles.navLink}  active`} href="#">Contact</a>
              </li>
            </ul>
          </div>
       
      </nav>
    </div>
  )
}
    

export default Navbar