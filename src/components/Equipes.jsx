// import Swiper core and required modules
import { A11y, Navigation, Scrollbar, Virtual } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';

import { useState } from 'react';

import Facebook from '../assets/images/equipe/Facebook.png';
import Linkedin from '../assets/images/equipe/Linkedin.png';
import NextButton from '../assets/images/equipe/next-button.png';
import PrevButton from '../assets/images/equipe/prev-button.png';
import Twitter from '../assets/images/equipe/Twitter.png';
import Whatsapp from '../assets/images/equipe/Whatsapp.png';

import { ANIMA_TECHNOLOGIE_TEAM } from '@/pages/equipeANIMA';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Equipes.module.css';

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button className={styles.prevButton} onClick={() => swiper.slidePrev()}>
      {children}
    </button>
  );
};

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button className={styles.nextButton} onClick={() => swiper.slideNext()}>
      {children}
    </button>
  );
};

const Equipes = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar, A11y, Virtual]}
      // slidesPerView={3}
      slidesPerView="auto"
      spaceBetween={15}
      updateOnWindowResize
      loop
      speed={3000}
      effect="fade"
      grabCursor
      centeredSlides={true}
      centeredSlidesBounds={true}
      autoHeight={true}
      initialSlide={0}
      slideToClickedSlide={true}
      navigation
      breakpoints={{
        768: {
          spaceBetweenSlides: 10,
        },
      }}
      className="swiper-container"
    >
      {ANIMA_TECHNOLOGIE_TEAM.map((membre, index) => (
        <SwiperSlide
          key={membre.id}
          virtualIndex={index}
          className={`slide ${styles.swiperSlide}`}
        >
          <Image
            src={membre.photo}
            alt="image 1"
            width={200}
            height={200}
            className={`photoMembreSlide ${styles.membrePhoto}`}
          />
          <div className={`profilMembre ${styles.membreProfil}`}>
            <div className="top position-relative">
              <div
                className={`position-absolute ${styles.photoMembreSlideActive}`}
              >
                <Image
                  src={membre.photo}
                  alt="image 1"
                  width={184}
                  height={178}
                />
              </div>
              <div className={`${styles.infoMembre}`}>
                <div className={`${styles.nomMembre}`}>{membre.name}</div>
                <div className={`text-uppercase ${styles.posteMembre}`}>{membre.poste}</div>
                <div className="d-flex align-items-start gap-1">
                  <Link href="/">
                    <Image
                      src={Facebook}
                      alt="facebook icon"
                      className={`rsIconSlideActive`}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src={Linkedin}
                      alt="linkedin icon"
                      className={`rsIconSlideActive`}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src={Whatsapp}
                      alt="whatsapp icon"
                      className={`rsIconSlideActive`}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src={Twitter}
                      alt="twitter icon"
                      className={`rsIconSlideActive`}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <p className={`p-3 ${styles.descriptionMembre}`}>
              {membre.description}
            </p>
            <div className="d-flex gap-2 navigationButton">
              <SwiperButtonPrev>
                <Image src={PrevButton} alt="Prev Button" />
              </SwiperButtonPrev>
              <SwiperButtonNext>
                <Image src={NextButton} alt="Next Button" />
              </SwiperButtonNext>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Equipes;
