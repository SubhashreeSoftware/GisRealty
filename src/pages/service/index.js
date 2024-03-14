import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import { getProducts, productSlug } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import CallToAction from "@/components/callToAction";
import AboutUsStyletwo from "@/components/aboutUs/aboutUsStyleTwo";
import Feature from "@/components/features";
import featureData from "@/data/service"
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
function Service() {
  const services = getProducts(featureData, "buying", "featured", 6);
  const [showPdfDownload, setShowPdfDownload] = useState(null);

  const handleDownloadClick = (pdfName) => {
    setShowPdfDownload(pdfName);
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [showModal1, setShowModal1] = useState(false);

  const openModal1 = () => {
    setShowModal1(true);
  };

  const closeModal1 = () => {
    setShowModal1(false);
  };
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );

  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb
          title="What We Do"
          sectionPace=""
          currentSlug="Service"
        />

        <AboutUsStyletwo sectionSpace="pb-90" />
        <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton style={{padding: 10}}>
        {/* <button variant="secondary" onClick={closeModal}>
            Close
          </button> */}
        </Modal.Header>
        <Modal.Body>
        <div className="ltn__login-area mb-120">
          <Container>
            <Row>
              <Col xs={12} lg={{ span: 8, offset: 2 }}>
                <div className="account-login-inner section-bg-1">
                  <form action="#" className="ltn__form-box contact-form-box">
                    <p className="text-center">{`Contact Us For A Service. `}</p>
                    <label>Name</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your name."
                    />
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email you want to get notified."
                    />
                    <label>Contact Number</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Contact Number."
                    />
                    <div className="btn-wrapper mt-0 text-center">
                      <button
                        className="btn theme-btn-1 btn-effect-1 text-uppercase"
                        type="submit"
                        onClick={() => handleDownloadClick("aura_brochure_Final")}
                      >
                        Download Aura Brochure
                      </button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        </Modal.Body>
     
      </Modal>
      <Modal show={showModal1} onHide={closeModal1}>
        <Modal.Header closeButton style={{padding: 10}}>
        {/* <button variant="secondary" onClick={closeModal}>
            Close
          </button> */}
        </Modal.Header>
        <Modal.Body>
        <div className="ltn__login-area mb-120">
          <Container>
            <Row>
              <Col xs={12} lg={{ span: 8, offset: 2 }}>
                <div className="account-login-inner section-bg-1">
                  <form action="#" className="ltn__form-box contact-form-box">
                    <p className="text-center">{`Contact Us For A Service. `}</p>
                    <label>Name</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your name."
                    />
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email you want to get notified."
                    />
                    <label>Contact Number</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Contact Number."
                    />
                    <div className="btn-wrapper mt-0 text-center">
                      <button
                        className="btn theme-btn-1 btn-effect-1 text-uppercase"
                        type="submit"
                        onClick={() => handleDownloadClick("MPR_Urban_Phase_2_brochure")}
                      >
                        Download MPR Urban Phase 2 Brochure
                      </button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        </Modal.Body>
     
      </Modal>
 {/* PDF Download Area */}
 {showPdfDownload && (
        <a
          href={`/${showPdfDownload}.pdf`}
          download={`${showPdfDownload}.pdf`}
          style={{ display: 'none' }}
          ref={(ref) => ref && ref.click()}
        >
          Download
        </a>
      )}
        {/* <!-- LOGIN AREA END --> */}
        <div className="ltn__login-area mb-120">
          <Container>
            <Row>
              <Col xs={12} lg={{ span: 8, offset: 2 }}>
                <div className="account-login-inner section-bg-1">
                  <form action="#" className="ltn__form-box contact-form-box" onSubmit={(e) => e.preventDefault()}>
                    <p className="text-center">{`To delve deeper into the details of these projects, download our comprehensive brochure. Gain insights into our vision, mission, and the remarkable features of each project. Explore the essence of our commitment to excellence and innovation.`}</p>
                  
                    <div className="btn-wrapper mt-0 text-center">
                    
                      <button
          className="btn theme-btn-1 btn-effect-1 text-uppercase mt-1"
          type="button"
          onClick={openModal}
        >
          Aura Brochure
        </button>
                      <button
                        className="btn theme-btn-1 btn-effect-1 text-uppercase mt-1"
                        type="submit"
                        onClick={openModal1}
                      >
                        MPR Urban Phase 2 Brochure
                      </button>
                    </div>
                    
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
  
        <Feature
          classes="section-bg-1"
          servicebtn={false}
          iconTag={true}
          headingClasses="section-subtitle-2"
          data={services}
          titleSectionData={{
            sectionClasses: "text-center",
            subTitle: "Our Services",
            title: "Our Core Services",
          }}
        />

  
        {/* <!-- BLOG AREA START (blog-3) -->  */}
        <div className="ltn__blog-area pt-120 pb-70">
          <Container>
            <Row>
              <Col lg={12}>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "News & Blogs",
                    title: "Leatest News Feeds",
                  }}
                />
              </Col>
            </Row>
            <Slider
              {...blogSettings}
              className="ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal"
            >
              {blogData.map((data, key) => {
                const slug = productSlug(data.title);
                return (
                  <BlogItem key={key} baseUrl="blog" data={data} slug={slug} />
                );
              })}
            </Slider>
          </Container>
        </div>
        {/* <!-- BLOG AREA END --> */}
 {/* <!-- LOGIN AREA START --> */}
 <div className="ltn__login-area mb-120">
          <Container>
            <Row>
              <Col xs={12} lg={{ span: 8, offset: 2 }}>
                <div className="account-login-inner section-bg-1">
                  <form action="#" className="ltn__form-box contact-form-box">
                    <p className="text-center">{`Contact Us For A Service. `}</p>
                    <label>Name</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your name."
                    />
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email you want to get notified."
                    />
                    <label>Contact Number</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Contact Number."
                    />
                    <div className="btn-wrapper mt-0 text-center">
                      <button
                        className="btn theme-btn-1 btn-effect-1 text-uppercase"
                        type="submit"
                      >
                        Ask For A Service
                      </button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>


        <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
          <Container>
            <Row>
              <Col xs={12}>
                <CallToAction />
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default Service;
