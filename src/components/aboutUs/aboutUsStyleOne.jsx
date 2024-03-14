import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { useState } from "react";

function AboutUsStyleOne({ sectionSpace }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="r7VRi7m3JlE"
        onClose={() => setOpen(false)}
      />
      <div className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img src="/img/others/7.png" alt="About Us Image" />
                <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
                  <div className="ltn__video-img ltn__animation-pulse1">
                    <img src="/img/others/8.png" alt="video popup bg image" />
                    <button
                      onClick={() => setOpen(true)}
                      className="ltn__video-icon-2"
                    >
                      <FaPlay />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area mb-20">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    About Us
                  </h6>
                  <h1 className="section-title">
                    The Leading Real Estate Marketplace<span>.</span>
                  </h1>
                  <p>
                    In 2019, the seeds of GIS REALTY were sown with a vision to revolutionize the real estate industry in India. Officially launched in 2020, GIS REALTY embarked on a journey to bring order to the disorder prevalent in the sector, with a focus on delivering not just properties but holistic solutions to customers. GIS REALTY set out to make communication transparent and decision-making more informed across all stakeholders in the real estate ecosystem.
                  </p>
                </div>
                {/* <ul className="ltn__list-item-half clearfix">
                  <li>
                    <i className="flaticon-home-2"></i>
                    Smart Home Design
                  </li>
                  <li>
                    <i className="flaticon-mountain"></i>
                    Beautiful Scene Around
                  </li>
                  <li>
                    <i className="flaticon-heart"></i>
                    Exceptional Lifestyle
                  </li>
                  <li>
                    <i className="flaticon-secure"></i>
                    Complete 24/7 Security
                  </li>
                </ul> */}
                <div className="btn-wrapper animated mb-5">
                  <Link
                    href="/service"
                    className="theme-btn-1 btn btn-effect-1"
                  >
                    OUR SERVICES
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
          <Col xs={12} lg={6} className="align-self-center">
          <h3 >
          Key Objectives<span>:</span>
          </h3>
          <ul className="ltn__list-item-1 ltn__list-item-1-before clearfix">
                  <li>To bring order and transparency to the real estate sector.</li>
                  <li>To provide comprehensive solutions to customers, beyond just properties.</li>
                  <li>To leverage cutting-edge technology for efficiency and effectiveness.</li>
                  <li>To anticipate market trends and adapt to changing dynamics.</li>
                </ul>
          </Col>
          <Col xs={12} lg={6} className="align-self-center">

          <img src="/img/others/88.png" alt="About Us Image" />
</Col>
<Col xs={12} lg={4} className="align-self-center" >

<img src="/img/others/66.png" alt="About Us Image" />
</Col>
          <Col xs={12} lg={8} className="align-self-center" >
          <h3 >
          From its inception, GIS REALTY has witnessed remarkable growth and evolution<span>:</span>
          </h3>
          <ul className="ltn__list-item-1 ltn__list-item-1-before clearfix">
                  <li>Started as a residential-focused company, GIS REALTY quickly expanded into multiple business verticals, covering the entire real estate value chain.</li>
                  <li>Capitalized on the Residential Housing Boom in India.</li>
                  <li>Deployed cutting-edge technological interventions and bespoke tools across its business lines.</li>
                  <li>Continuously scaled up operations and branched out into different value propositions within the real estate sector.</li>
                </ul>
          </Col>
          
          <Col xs={12} lg={12} className="align-self-center" style={{marginTop: 70}}>
          <h3 >
          Today, GIS REALTY stands as a formidable force in the real estate sector, offering a comprehensive suite of solutions<span>:</span>
          </h3>
          <ul className="ltn__list-item-1 ltn__list-item-1-before clearfix">
                  <li><b>Residential and Commercial Property Sales:</b> Offering a diverse range of residential and commercial properties.</li>
                  <li><b>Property Management:</b> Providing end-to-end property management services to property owners.</li>
                  <li><b>Real Estate Consulting:</b> Offering expert advice and insights to clients for informed decision-making.</li>
                  <li><b>Project Development:</b> Undertaking and executing real estate development projects from concept to completion.</li>
                  <li><b>Investment Advisory:</b> Assisting clients in making strategic real estate investments for optimal returns.</li>
                  <li><b>Legal and Financial Services:</b> Providing legal and financial support throughout the real estate transaction process.</li>
                </ul>
                <p>GIS REALTY's journey from a visionary idea to a leading force in the real estate industry exemplifies its commitment to innovation, transparency, and customer-centricity. With a relentless focus on delivering value-added solutions and leveraging technology to drive efficiency, GIS REALTY continues to redefine the standards of excellence in the real estate sector.</p>
          </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUsStyleOne;
