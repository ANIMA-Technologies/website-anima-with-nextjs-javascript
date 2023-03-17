import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Facebook from '../assets/images/contact/Facebook.png';
import Instagram from '../assets/images/contact/Instagram.png';
import Linkedin from '../assets/images/contact/Linkedin.png';
import Twitter from '../assets/images/contact/Twitter.png';
import BackIcon from '../assets/images/contact/back-icon.png';
import Bg from '../assets/images/contact/bg.png';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [data, setData] = useState({
    nom: '',
    email: '',
    objectif: '',
    message: '',
  });

  // Handles input values here

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const { nom, email, objectif, message } = data; // Array Destructutring

  function validateFormWithJS() {
    // if (!nom) {
    //   alert(`S'il vous plaît, entrez votre nom`)
    //   return false
    // }

    if (nom.length < 3) {
      alert('Votre nom doit avoir au moins 3 caratères!')
      return false
    }

    return true;
  }

  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    if (validateFormWithJS()) {
      // Get data from the form
      // and
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data);

      // API endpoint where we send form data.
      const endpoint = '/api/contactez-nous';

      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      };

      try {
        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options);

        // Get the response data from server as JSON.

        // If server returns the name submitted, that means the form works.

        const result = await response.json();

        const { message } = result;

        alert(`message: ${message}`);

        setData({
          nom: '',
          email: '',
          objectif: '',
          message: '',
        });

      } catch (error) {
        alert(`error: ${error}`);
      }
    }


  };

  return (
    <div className={`container-fluid containerFluid w-100 ${styles.contact}`}>
      <div
        className={`row align-items-center justify-content-center position-relative h-100 px-4 px-md-0`}
      >
        <div className="col-12 col-md-6">
          <div className="m-4">
            <Link href="/">
              <Image
                src={BackIcon}
                alt="Back icon"
                className={`${styles.backIcon}`}
              />
            </Link>
            <h2 className={`mt-4 ${styles.title}`}>Contactez-nous</h2>
            <Image
              src={Bg}
              alt="Bg contact"
              className={`d-block d-sm-none w-100 h-auto ${styles.bgImgOnMobile}`}
            />
            <form className={`mt-5 ${styles.form}`} onSubmit={handleSubmit}>
              <div className={`d-flex flex-column gap-5 ${styles.inputGroup}`}>
                <input
                  type="text"
                  name="nom"
                  value={nom}
                  onChange={(e) => handleChange(e)}
                  placeholder="Nom*"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => handleChange(e)}
                  placeholder="Email*"
                  required
                />
                <input
                  type="text"
                  name="objectif"
                  value={objectif}
                  onChange={(e) => handleChange(e)}
                  placeholder="Objectif*"
                  required
                />
                <textarea
                  rows={7}
                  name="message"
                  value={message}
                  onChange={(e) => handleChange(e)}
                  placeholder="Message"
                  required
                ></textarea>
                <button type="submit">Envoyer</button>
              </div>
            </form>
            {/* <div className={`d-md-none w-100 d-flex gap-4 align-items-center justify-content-center py-3 mt-5 ${styles.socialIconsOnMobile}`}>
              <Link href="">
                <Image src={Instagram} alt="Instagram icon" />
              </Link>
              <Link href="">
                <Image src={Facebook} alt="Facebook icon" />
              </Link>
              <Link href="">
                <Image src={Linkedin} alt="Linkedin icon" />
              </Link>
              <Link href="">
                <Image src={Twitter} alt="Twitter icon" />
              </Link>
            </div> */}
          </div>
        </div>
        <div
          className={`col-12 col-md-6 d-flex align-items-center justify-content-center d-none d-md-block px-0 ${styles.bg}`}
        >
          <div className={`d-none d-md-block ${styles.square}`}></div>
          <Image src={Bg} alt="Bg contact" className={`w-50 h-auto position-absolute ${styles.bgImg}`} />
          <div className={` w-25 h-100 position-absolute ${styles.pinkBg}`}>
            <div className="w-100 h-100 position-relative">
              <div className="w-100 d-flex gap-2 align-items-center justify-content-center position-absolute">
                <Link href="">
                  <Image src={Instagram} alt="Instagram icon" />
                </Link>
                <Link href="">
                  <Image src={Facebook} alt="Facebook icon" />
                </Link>
                <Link href="">
                  <Image src={Linkedin} alt="Linkedin icon" />
                </Link>
                <Link href="">
                  <Image src={Twitter} alt="Twitter icon" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
