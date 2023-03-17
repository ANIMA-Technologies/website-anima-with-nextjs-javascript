import Image from "next/image";
import { Component } from "react";
import Slider from "react-slick";
import Img2 from "../assets/images/realisation/2.png";
import styles from "../styles/AvisClient.module.css";

export default class AvisClient extends Component {
  render() {
    function SampleNextArrow(props) {
      const {onClick } = props;
      return (
        <div className={`${styles.arrow_right}`} onClick={onClick} >
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
      );
    }

    function SamplePrevArrow(props) {
      const {onClick } = props;
      return (
        <div className={`${styles.arrow_left}`} onClick={onClick} >
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </div>
      );
    }
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      appendDots:dots => (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          className={`${styles.dots_div}`}
          style={{
            width: "30px",
            height:"20px",
          }}
        >
        </div>
      ),
      // responsive: [
      //   {
      //     breakpoint: 992,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //       infinite: true,
      //       dots: true
      //     }
      //   },
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //       initialSlide: 1
      //     }
      //   },
      //   {
      //     breakpoint: 576,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       initialSlide: 2
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       dots: false
      //     }
      //   }
      // ]
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
         {
          breakpoint: 991,
          settings: {
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false
          }
        },
         {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };
    return (
      
      <div id="avisClient">
        <div className="container-fluid">
          <h1 className={`${styles.titre_avis}`}>Les avis de nos clients</h1>
        </div>
        <Slider {...settings}>
          <div className="container-fluid">
            <div className="row">
                <div className={`col-lg-12 ${styles.col1_avis}`}>
                    <div className={`${styles.content_avis}`}>
                      <Image src={Img2} className={`${styles.img_avis}`} alt="image 2" />
                      <h2 className={`${styles.h2_avis}`}>Pierre Ratokodimimanana</h2>
                      <div className={`${styles.comment_avis}`}>
                        <p className={`${styles.span_avis}`}>
                          <i className={`fa fa-quote-left ${styles.span1_avis}`} aria-hidden="true"></i><br />
                        </p>
                        <p className={`${styles.p_h2}`}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dictum ex. Duis pulvinar, urna et consectetur vulputate, nisi magna tempor diam, eget luctus nisi ex non erat. Duis pulvinar enim<br />
                        </p>
                        <p className={`${styles.span_avis} ${styles.span_avis1}`}>
                          <i className={`fa fa-quote-right ${styles.span1_avis}`} aria-hidden="true"></i>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
                <div className={`col-lg-12 ${styles.col1_avis}`}>
                    <div className={`${styles.content_avis}`}>
                      <Image src={Img2} className={`${styles.img_avis}`} alt="image avis" />
                      <h2 className={`${styles.h2_avis}`}>Pierre Ratokodimimanana</h2>
                      <div className={`${styles.comment_avis}`}>
                        <p className={`${styles.span_avis}`}>
                          <i className={`fa fa-quote-left ${styles.span1_avis}`} aria-hidden="true"></i><br />
                        </p>
                        <p className={`${styles.p_h2}`}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dictum ex. Duis pulvinar, urna et consectetur vulputate, nisi magna tempor diam, eget luctus nisi ex non erat. Duis pulvinar enim<br />
                        </p>
                        <p className={`${styles.span_avis} ${styles.span_avis1}`}>
                          <i className={`fa fa-quote-right ${styles.span1_avis}`} aria-hidden="true"></i>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
                <div className={`col-lg-12 ${styles.col1_avis}`}>
                    <div className={`${styles.content_avis}`}>
                      <Image src={Img2} className={`${styles.img_avis}`} alt="image avis" />
                      <h2 className={`${styles.h2_avis}`}>Pierre Ratokodimimanana</h2>
                      <div className={`${styles.comment_avis}`}>
                        <p className={`${styles.span_avis}`}>
                          <i className={`fa fa-quote-left ${styles.span1_avis}`} aria-hidden="true"></i><br />
                        </p>
                        <p className={`${styles.p_h2}`}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dictum ex. Duis pulvinar, urna et consectetur vulputate, nisi magna tempor diam, eget luctus nisi ex non erat. Duis pulvinar enim<br />
                        </p>
                        <p className={`${styles.span_avis} ${styles.span_avis1}`}>
                          <i className={`fa fa-quote-right ${styles.span1_avis}`} aria-hidden="true"></i>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
                <div className={`col-lg-12 ${styles.col1_avis}`}>
                    <div className={`${styles.content_avis}`}>
                      <Image src={Img2} className={`${styles.img_avis}`} alt="image avis" />
                      <h2 className={`${styles.h2_avis}`}>Pierre Ratokodimimanana</h2>
                      <div className={`${styles.comment_avis}`}>
                        <p className={`${styles.span_avis}`}>
                          <i className={`fa fa-quote-left ${styles.span1_avis}`} aria-hidden="true"></i><br />
                        </p>
                        <p className={`${styles.p_h2}`}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dictum ex. Duis pulvinar, urna et consectetur vulputate, nisi magna tempor diam, eget luctus nisi ex non erat. Duis pulvinar enim<br />
                        </p>
                        <p className={`${styles.span_avis} ${styles.span_avis1}`}>
                          <i className={`fa fa-quote-right ${styles.span1_avis}`} aria-hidden="true"></i>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
                <div className={`col-lg-12 ${styles.col1_avis}`}>
                    <div className={`${styles.content_avis}`}>
                      <Image src={Img2} className={`${styles.img_avis}`} alt="image avis" />
                      <h2 className={`${styles.h2_avis}`}>Pierre Ratokodimimanana</h2>
                      <div className={`${styles.comment_avis}`}>
                        <p className={`${styles.span_avis}`}>
                          <i className={`fa fa-quote-left ${styles.span1_avis}`} aria-hidden="true"></i><br />
                        </p>
                        <p className={`${styles.p_h2}`}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dictum ex. Duis pulvinar, urna et consectetur vulputate, nisi magna tempor diam, eget luctus nisi ex non erat. Duis pulvinar enim<br />
                        </p>
                        <p className={`${styles.span_avis} ${styles.span_avis1}`}>
                          <i className={`fa fa-quote-right ${styles.span1_avis}`} aria-hidden="true"></i>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
                <div className={`col-lg-12 ${styles.col1_avis}`}>
                    <div className={`${styles.content_avis}`}>
                      <Image src={Img2} className={`${styles.img_avis}`} alt="image avis" />
                      <h2 className={`${styles.h2_avis}`}>Pierre Ratokodimimanana</h2>
                      <div className={`${styles.comment_avis}`}>
                        <p className={`${styles.span_avis}`}>
                          <i className={`fa fa-quote-left ${styles.span1_avis}`} aria-hidden="true"></i><br />
                        </p>
                        <p className={`${styles.p_h2}`}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dictum ex. Duis pulvinar, urna et consectetur vulputate, nisi magna tempor diam, eget luctus nisi ex non erat. Duis pulvinar enim<br />
                        </p>
                        <p className={`${styles.span_avis} ${styles.span_avis1}`}>
                          <i className={`fa fa-quote-right ${styles.span1_avis}`} aria-hidden="true"></i>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
                <div className={`col-lg-12 ${styles.col1_avis}`}>
                    <div className={`${styles.content_avis}`}>
                      <Image src={Img2} className={`${styles.img_avis}`} alt="image avis" />
                      <h2 className={`${styles.h2_avis}`}>Pierre Ratokodimimanana</h2>
                      <div className={`${styles.comment_avis}`}>
                        <p className={`${styles.span_avis}`}>
                          <i className={`fa fa-quote-left ${styles.span1_avis}`} aria-hidden="true"></i><br />
                        </p>
                        <p className={`${styles.p_h2}`}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dictum ex. Duis pulvinar, urna et consectetur vulputate, nisi magna tempor diam, eget luctus nisi ex non erat. Duis pulvinar enim<br />
                        </p>
                        <p className={`${styles.span_avis} ${styles.span_avis1}`}>
                          <i className={`fa fa-quote-right ${styles.span1_avis}`} aria-hidden="true"></i>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
                <div className={`col-lg-12 ${styles.col1_avis}`}>
                    <div className={`${styles.content_avis}`}>
                      <Image src={Img2} className={`${styles.img_avis}`} alt="image avis" />
                      <h2 className={`${styles.h2_avis}`}>Pierre Ratokodimimanana</h2>
                      <div className={`${styles.comment_avis}`}>
                        <p className={`${styles.span_avis}`}>
                          <i className={`fa fa-quote-left ${styles.span1_avis}`} aria-hidden="true"></i><br />
                        </p>
                        <p className={`${styles.p_h2}`}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dictum ex. Duis pulvinar, urna et consectetur vulputate, nisi magna tempor diam, eget luctus nisi ex non erat. Duis pulvinar enim<br />
                        </p>
                        <p className={`${styles.span_avis} ${styles.span_avis1}`}>
                          <i className={`fa fa-quote-right ${styles.span1_avis}`} aria-hidden="true"></i>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
                <div className={`col-lg-12 ${styles.col1_avis}`}>
                    <div className={`${styles.content_avis}`}>
                      <Image src={Img2} className={`${styles.img_avis}`} alt="image avis" />
                      <h2 className={`${styles.h2_avis}`}>Pierre Ratokodimimanana</h2>
                      <div className={`${styles.comment_avis}`}>
                        <p className={`${styles.span_avis}`}>
                          <i className={`fa fa-quote-left ${styles.span1_avis}`} aria-hidden="true"></i><br />
                        </p>
                        <p className={`${styles.p_h2}`}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dictum ex. Duis pulvinar, urna et consectetur vulputate, nisi magna tempor diam, eget luctus nisi ex non erat. Duis pulvinar enim<br />
                        </p>
                        <p className={`${styles.span_avis} ${styles.span_avis1}`}>
                          <i className={`fa fa-quote-right ${styles.span1_avis}`} aria-hidden="true"></i>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
         
          
          
          
        </Slider>
      </div>
    );
  }
}

