import Link from "next/link";
import { FaArrowRight, FaSearch, FaRegEnvelopeOpen } from "react-icons/fa";
import serviceData from "@/data/service";
import { LayoutOne } from "@/layouts";
import { productSlug,getProducts } from "@/lib/product";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Residential from "@/components/Residential";
import featureData from "@/data/residential"

function ServiceDetails({ service }) {
  const services = getProducts(featureData, "buying", "featured", 6);
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
         <Residential
          classes="section-bg-1"
          servicebtn={false}
          iconTag={true}
          headingClasses="section-subtitle-2"
          data={services}
          titleSectionData={{
            sectionClasses: "text-center",
            subTitle: "Residentials",
            title: "Our Core Works",
          }}
        />
          {/* <ul>
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
        </ul> */}
    
        </>
       
        
      );
    } else {
      // Default case or additional conditions can be added here
      return (
        <div>
           <Row>
              <Col xs={12} >
                <div className="ltn__page-details-inner ltn__service-details-inner">
                <Col xs={12} >
                <Row>
                <Col xs={12} lg={6} >
                  <div className="ltn__blog-img">
                    <img
                      src={`/img/service/${service.thumbImage}`}
                      alt="Image"
                    />
                  </div>
                  </Col>
                  <Col xs={12} lg={6} >
                  <div className="ltn__blog-img">
                    <img
                      src={`/img/service/${service.thumbImage}`}
                      alt="Image"
                    />
                  </div>
                  </Col>
                  </Row>
                  </Col>
                  
                  <p className="overflow-hidden">
                    <span className="ltn__first-letter">{firstLetter}</span>
                    {firstToEnd}
                  </p>
                  <p>{service.fullDescription}</p>
                  {/* <Row>
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
                  <p>{service.captions.captionShortDescription}</p> */}
                </div>
              </Col>
           
            </Row>
        </div>
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
          <Col xs={12}>
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
                  </div> 
                  <div className="widget ltn__banner-widget">
                    <Link href="/shop/grid">
                      <img src="/img/banner/banner-1.jpg" alt="Banner Image" />
                    </Link>
                  </div> */}
                </aside>
          </Col>
           
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
