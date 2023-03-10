import styles from "../styles/Navbar.module.css";

import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg p-0">
      <div className={`container-fluid ${styles.containerFluid}`}>
        <a className="navbar-brand" href="#">
          <Image src={Logo} className={styles.logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active ${styles.navLink}`} aria-current="page" href="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${styles.navLink} ${styles.dropdownToggle}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Développement Informatique
                <i class="fa fa-angle-down ml-1 font-weight-bold" aria-hidden="true"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" href="/developpement/web">
                    Développement Web
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="/developpement/mobile">
                    Développement Mobile
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="/developpement/logiciels-sur-mesure">
                    Développement de logiciels sur mesure
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="/developpement/design-de-marque">
                    Design de marque
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${styles.navLink} ${styles.dropdownToggle}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                La société
                <i class="fa fa-angle-down ml-1 font-weight-bold" aria-hidden="true"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Réalisations
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    L&apos;équipe
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Recrutement
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
