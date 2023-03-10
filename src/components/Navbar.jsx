;import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import style from "../styles/StyleForAll.module.css";
const Navbar = () => {
  return (
    <div className={`"container-fluid" ${style.containerFluid}`}>
      <nav className="navbar navbar-expand-lg navbar-light">
 
          <a className="navbar-brand" href="#">
            <Image src="/imagesAnima/Logo.png" className={styles.logo} alt="logo" width={50} height={50} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link  ${styles.navLink}  active`} aria-current="page" href="#">Home</a>
              </li>
              
              <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle  ${styles.navLink}  active`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Développement Informatique
                  <i className="fa fa-angle-down ml-1 font-weight-bold" aria-hidden="true"></i>
                </a>
                <ul className={`dropdown-menu ${styles.dropdown1}`} aria-labelledby="navbarDropdown">
                  <li><a className={`dropdown-item ${styles.dropdownItem0}`} href="#">Développement web</a></li>
                  <li><a className={`dropdown-item ${styles.dropdownItem0}`} href="#">Développement MOBILE</a></li>
                  <li><a className={`dropdown-item ${styles.dropdownItem0}`}>Développement de logiciels sur mesure</a></li>
                  <li><a className={`dropdown-item ${styles.dropdownItem0}`} href="#">Design de marque</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle  ${styles.navLink}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  La société
                  <i className="fa fa-angle-down ml-1 font-weight-bold" aria-hidden="true"></i>
                </a>
                <ul className={`dropdown-menu ${styles.dropdown2}`} aria-labelledby="navbarDropdown">
                  <li><a className={`dropdown-item ${styles.dropdownItem1}`} href="#">Réalisations</a></li>
                  <li><a className={`dropdown-item ${styles.dropdownItem1}`} href="#">L’équipe</a></li>
                  <li><a className={`dropdown-item ${styles.dropdownItem1}`} href="#">Recrutement</a></li>
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