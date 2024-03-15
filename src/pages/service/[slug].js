import Link from "next/link";
import { FaArrowRight, FaSearch, FaRegEnvelopeOpen } from "react-icons/fa";
import serviceData from "@/data/service";
import { LayoutOne } from "@/layouts";
import { productSlug } from "@/lib/product";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function ServiceDetails({ service }) {
  const firstLetter = service.shortDescription.slice(0, 1);
  const firstToEnd = service.shortDescription.slice(1);

  const renderServiceList = () => {
    if (service.title === 'Value Added Services') {
      return (
        <ul>
          <h1>Value Added Services</h1>
          <li>
            <Link href={`/service/digital-agency`}>
              Digital Agency
              <span>
                <FaArrowRight />
              </span>
            </Link>
          </li>
          <li className="active">
            <Link href="/service/creative-agency">
            Creative Agency
              <span>
                <FaArrowRight />
              </span>
            </Link>
          </li>
          <li>
            <Link href="/service/post-sales">
              Post Sales
              <span>
                <FaArrowRight />
              </span>
            </Link>
          </li>
        </ul>
      );
    } else if (service.title === 'Residential Sales and Marketing') {
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
      return (
        <>
          <ul>
          <h1>Residentials</h1>
          <li>
            <Link href="/shop/grid">
              Apartments
              <span>
                <FaArrowRight />
              </span>
            </Link>
          </li>
          <li className="active">
            <Link href="/shop/grid">
              Villas
              <span>
                <FaArrowRight />
              </span>
            </Link>
          </li>
          <li>
            <Link href="/shop/grid">
              Plots
              <span>
                <FaArrowRight />
              </span>
            </Link>
          </li>
        </ul>
        <div style={{marginTop: 20, width: "100%"}}>
        
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
     </div>
        </>
       
        
      );
    } else {
      // Default case or additional conditions can be added here
      return (
        <div></div>
        // <ul>
        //   <h1>Residentials</h1>
        //   {/* Default list items */}
        //   <li>
        //     <Link href="/shop/grid">
        //       Default
        //       <span>
        //         <FaArrowRight />
        //       </span>
        //     </Link>
        //   </li>
        //   <li className="active">
        //     <Link href="/shop/grid">
        //       Default
        //       <span>
        //         <FaArrowRight />
        //       </span>
        //     </Link>
        //   </li>
        //   <li>
        //     <Link href="/shop/grid">
        //       Default
        //       <span>
        //         <FaArrowRight />
        //       </span>
        //     </Link>
        //   </li>
        // </ul>
      );
    }
  };




  return (
    <>
      <LayoutOne topbar={true}>
        {/* <!-- BREADCRUMB AREA START --> */}

        <ShopBreadCrumb
          title="Service Details"
          sectionPace=""
          currentSlug={service.title}
        />

        {/* <!-- BREADCRUMB AREA END --> */}

        {/* <!-- PAGE DETAILS AREA START (service-details) --> */}
        <div className="ltn__page-details-area ltn__service-details-area mb-105">
          <Container>
            <Row>
              <Col xs={12} lg={8}>
                <div className="ltn__page-details-inner ltn__service-details-inner">
                  <div className="ltn__blog-img">
                    <img
                      src={`/img/service/${service.thumbImage}`}
                      alt="Image"
                    />
                  </div>
                  <p className="overflow-hidden">
                    <span className="ltn__first-letter">{firstLetter}</span>
                    {firstToEnd}
                  </p>
                  <p>{service.fullDescription}</p>
                  <Row>
                    <Col xs={12} lg={6}>
                      <img
                        src={`/img/service/${service.captions.image1}`}
                        alt="image"
                      />
                      <label>{service.captions.caption}</label>
                    </Col>
                    <Col xs={12} lg={6}>
                      <img
                        src={`/img/service/${service.captions.image2}`}
                        alt="image"
                      />
                    </Col>
                  </Row>
                  <p>{service.captions.captionFullDescription}</p>
                  <p>{service.captions.captionShortDescription}</p>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <aside className="sidebar-area ltn__right-sidebar">
                  <div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
                  {renderServiceList()}
                  </div>
                  {/* <div className="widget ltn__search-widget ltn__newsletter-widget">
                    <h6 className="ltn__widget-sub-title">{`// subscribe`}</h6>
                    <h4 className="ltn__widget-title">Get Newsletter</h4>
                    <form action="#">
                      <input type="text" name="search" placeholder="Search" />
                      <button type="submit">
                        <FaSearch />
                      </button>
                    </form>
                    <div className="ltn__newsletter-bg-icon">
                      <FaRegEnvelopeOpen />
                    </div>
                  </div> */}
                  <div className="widget ltn__banner-widget">
                    <Link href="/shop/grid">
                      <img src="/img/banner/banner-1.jpg" alt="Banner Image" />
                    </Link>
                  </div>
                </aside>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- PAGE DETAILS AREA END --> */}

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

export default ServiceDetails;

export async function getStaticProps({ params }) {
  // get blog data based on slug
  const service = serviceData.filter(
    (single) => productSlug(single.title) === params.slug
  )[0];

  return { props: { service } };
}

export async function getStaticPaths() {
  // get the paths we want to pre render based on blogs
  const paths = serviceData.map((data) => ({
    params: {
      slug: productSlug(data.title, {
        lower: true, // convert to lower case, defaults to `false`
      }),
    },
  }));

  return { paths, fallback: false };
}
