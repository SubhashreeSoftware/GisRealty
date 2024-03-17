import { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Slider from "react-slick";
import {
  FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaStar,
  FaStarHalfAlt,
  FaSearch,
  FaRegStar,
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaUserAlt,
  FaEnvelope,
  FaGlobe,
  FaPencilAlt,
  FaCalendarAlt
} from "react-icons/fa";
import BreadCrumb from "@/components/breadCrumbs";
import { LayoutOne } from "@/layouts";
import { useSelector } from "react-redux";
import { getProducts, productSlug, getDiscountPrice } from "@/lib/product";
import products from "@/data/products.json";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import RelatedProduct from "@/components/product/related-product";
import FollowUs from "@/components/followUs";
import Tags from "@/components/tags";
import blogData from "@/data/blog";
import Modal from 'react-bootstrap/Modal';

function ProductDetails({ product }) {
  const { products } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const latestdBlogs = getProducts(blogData, "buying", "featured", 4);
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
  
  const relatedProducts = getProducts(
    products,
    product.category[0],
    "popular",
    2
  );

  const topRatedProducts = getProducts(
    products,
    product.category[0],
    "topRated",
    2
  );
  const popularProducts = getProducts(
    products,
    product.category[0],
    "popular",
    4
  );

  const discountedPrice = getDiscountPrice(
    product.price,
    product.discount
  ).toFixed(2);

  const productPrice = product.price.toFixed(2);
  const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);
  const wishlistItem = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === product.id
  );
  const compareItem = compareItems.find(
    (compareItem) => compareItem.id === product.id
  );

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
  const productDetailsCarouselSettings = {
    centerMode: true,
    infinite: true,
    centerPadding: "450px",
    slidesToShow: 1,
    dots: false,
    speed: 500,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          dots: true,
        },
      },
    ],
  };

  const popular_product = {
    infinite: true,
    slidesToShow: 1,
    dots: true,
    speed: 500,
    arrows: false,
  };

  const [quickViewShow, SetQuickViewShow] = useState(false);
  const quickViewCloseHandle = () => SetQuickViewShow(false);
  const showQuickViewHandle = () => SetQuickViewShow(true);

  const [wishlistShow, SetWishlistShow] = useState(false);
  const wishlistCloseHandle = () => SetWishlistShow(false);
  const showWishlistHandle = () => SetWishlistShow(true);
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <LayoutOne topbar={true}>
        {/* <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="X7R-q9rsrtU"
          onClose={() => setOpen(false)}
        /> */}
        {/* <!-- BREADCRUMB AREA START --> */}

        <BreadCrumb
          title="Product Details"
          sectionPace="mb-0"
          currentSlug={product.title}
        />

        {/* <!-- BREADCRUMB AREA END --> */}
        
        {/* <!-- IMAGE SLIDER AREA START (img-slider-3) -->
        <div className="col-lg-12">
        <Container fluid style={{alignSelf: "center"}}>
       
                          </Container>
         <Container fluid>
            <Slider
              {...productDetailsCarouselSettings}
              className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all g-0"
            >
              {product.carousel.map((single, key) => {
                return (
                  <div className="col-lg-12" key={key}>
                    <div className="ltn__img-slide-item-4">
                      <Link href="#?">
                        <img
                          src={`/img/img-slide/${single.img}`}
                          alt={`${single.title}`}
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </Container> 
        </div> */}
        
        {/* <!-- IMAGE SLIDER AREA END -->

    <!-- SHOP DETAILS AREA START --> */}
        <div className="ltn__shop-details-area pb-10">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                  {/* <div className="ltn__blog-meta">
                    <ul>
                      {
                        (product.featured ? (
                          <li className="ltn__blog-category">
                            <Link href="#">Featured</Link>
                          </li>
                        ) : (
                          ""
                        ),
                          product.rent ? (
                            <li className="ltn__blog-category">
                              <Link className="bg-orange" href="#">
                                For Rent
                              </Link>
                            </li>
                          ) : (
                            ""
                          ))
                      }

                      <li className="ltn__blog-date">
                        <i className="far fa-calendar-alt"></i>
                        {product.date}
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments"></i>
                          {product.comments}
                          Comments
                        </a>
                      </li>
                    </ul>
                  </div> */}
                  <div className="ltn__property-details-gallery mb-30">
                    <div className="row">
                      <div className="col-md-6">
                        <Link
                          href={`/img/others/${product.gallery.img1}`}
                          data-rel="lightcase:myCollection"
                        >
                           <img
                            className="mb-30"
                            src={`/img/others/${product.gallery.img2}`}
                            alt={`${product.title}`}
                          />
                        </Link>
                        
                      </div>
                      <div className="col-md-6">
                      <Link
                          href={`/img/others/${product.gallery.img2}`}
                          data-rel="lightcase:myCollection"
                        >
                          <img
                            className="mb-30"
                            src={`/img/others/${product.gallery.img2}`}
                            alt={`${product.title}`}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h1> {product.title}</h1>
                  <label>
                    <span className="ltn__secondary-color">
                      <i className="flaticon-pin"></i>
                    </span>{" "}
                    Hyderbad
                  </label>
                  <h4 className="title-2"> {product.description.title}</h4>
                  <p>{product.description.fullDescription}</p>
                  <p>{product.description.shortDescription}</p>
  <div>
        <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton style={{padding: 10}}>
        {/* <button variant="secondary" onClick={closeModal}>
            Close
          </button> */}
        </Modal.Header>
        <Modal.Body>
        <div className="ltn__login-area mb-10">
            <Row>
              <Col xs={12} lg={{ span: 12 }}>
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
        </div>
        </Modal.Body>
     
      </Modal>
      <Modal show={showModal1} onHide={closeModal1}>
        <Modal.Header closeButton style={{padding: 10}}>
        {/* <button variant="secondary" onClick={closeModal1}>
            Close
          </button> */}
        </Modal.Header>
        <Modal.Body>
        <div className="ltn__login-area mb-10">
            <Row>
              <Col xs={12} lg={{ span: 12 }}>
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
        </div>
        </Modal.Body>
     
      </Modal>
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
       
                  <h4 className="title-2">Property Detail</h4>
                  <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                    <ul>
                      <li>
                        <label>Total Area:</label>{" "}
                        <span>{product.propertyDetails.area}</span>
                      </li>
                      <li>
                        <label>Towers: </label>{" "}
                        <span>{product.propertyDetails.tower} </span>
                      </li>
                      <li>
                        <label>Total Floors:</label>{" "}
                        <span>{product.propertyDetails.floor}</span>
                      </li>
                      <li>
                        <label>Total Units:</label>{" "}
                        <span>{product.propertyDetails.unit}</span>
                      </li>
                      <li>
                        <label>Facing:</label>{" "}
                        <span>{product.propertyDetails.face}</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <label>Sizes & Area:</label>{" "}
                        <span >{product.propertyDetails.size}</span>
                      </li>
                      <li>
                        <label>Club House:</label>{" "}
                        <span>{product.propertyDetails.club} </span>
                      </li>
                      <li>
                        <label>Amenities:</label>{" "}
                        <span>{product.propertyDetails.amenities}</span>
                      </li>
                      <li>
                        <label>Position:</label> <span>{product.propertyDetails.position}</span>
                      </li>
                      <li>
                        <label>Possession:</label>{" "}
                        <span>{product.propertyDetails.possession}</span>
                      </li>
                      <li>
                        <label>Price starts from:</label>{" "}
                        <span>{product.value}</span>
                      </li>
                    </ul>
                  </div>

                  {/* <h4 className="title-2">Facts and Features</h4>
                  <div className="property-detail-feature-list clearfix mb-45">
                    <ul>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Living Room</h6>
                            <small>{product.factsAndFeatures.livingRoom}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Garage</h6>
                            <small>{product.factsAndFeatures.garage}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Dining Area</h6>
                            <small>{product.factsAndFeatures.diningArea}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Bedroom</h6>
                            <small>{product.factsAndFeatures.bedroom}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Bathroom</h6>
                            <small>{product.factsAndFeatures.bathroom}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Gym Area</h6>
                            <small>{product.factsAndFeatures.gymArea}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Garden</h6>
                            <small>{product.factsAndFeatures.garden}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Parking</h6>
                            <small>{product.factsAndFeatures.parking}</small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div> */}

                  <h4 className="title-2">From Our Gallery</h4>
                  <div className="ltn__property-details-gallery mb-30">
                    <div className="row">
                      <div className="col-md-6">
                        <Link
                          href={`/img/others/${product.gallery.img1}`}
                          data-rel="lightcase:myCollection"
                        >
                          <img
                            className="mb-30"
                            src={`/img/others/${product.gallery.img1}`}
                            alt={`${product.title}`}
                          />
                        </Link>
                        <Link
                          href={`/img/others/${product.gallery.img2}`}
                          data-rel="lightcase:myCollection"
                        >
                          <img
                            className="mb-30"
                            src={`/img/others/${product.gallery.img2}`}
                            alt={`${product.title}`}
                          />
                        </Link>
                      </div>
                      <div className="col-md-6">
                        <Link
                          href={`/img/others/${product.gallery.img3}`}
                          data-rel="lightcase:myCollection"
                        >
                          <img
                            className="mb-30"
                            src={`/img/others/${product.gallery.img3}`}
                            alt={`${product.title}`}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <h4 className="title-2 mb-10">Amenities</h4>

                  <div className="property-details-amenities mb-60">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="ltn__menu-widget">
                          <ul>
                            {product.amenities1.map((single, key) => {
                              return (
                                <li key={key}>
                                  <label className="checkbox-item">
                                    {single}
                                    <input
                                      type="checkbox"
                                      defaultChecked="checked"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="ltn__menu-widget">
                          <ul>
                            {product.amenities2.map((single, key) => {
                              return (
                                <li key={key}>
                                  <label className="checkbox-item">
                                    {single}
                                    <input
                                      type="checkbox"
                                      defaultChecked="checked"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="ltn__menu-widget">
                          <ul>
                            {product.amenities3.map((single, key) => {
                              return (
                                <li key={key}>
                                  <label className="checkbox-item">
                                    {single}
                                    <input
                                      type="checkbox"
                                      defaultChecked="checked"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <h4 className="title-2">Location</h4>
                  <div className="property-details-google-map mb-60">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen=""
                    ></iframe>
                  </div> */}
{/* 
                  <h4 className="title-2">Floor Plans</h4>

                  <div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
                    <Tab.Container defaultActiveKey="first">
                      <div className="ltn__tab-menu ltn__tab-menu-3">
                        <Nav className="nav">
                          <Nav.Link eventKey="first">First Floor</Nav.Link>
                          <Nav.Link eventKey="second">Second Floor</Nav.Link>
                          <Nav.Link eventKey="third">Third Floor</Nav.Link>
                          <Nav.Link eventKey="fourth">Top Garden</Nav.Link>
                        </Nav>
                      </div>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <div className="ltn__apartments-tab-content-inner">
                            <div className="row">
                              <div className="col-lg-7">
                                <div className="apartments-plan-img">
                                  <img src="/img/others/10.png" alt="#" />
                                </div>
                              </div>
                              <div className="col-lg-5">
                                <div className="apartments-plan-info">
                                  <h2>First Floor</h2>
                                  <p>
                                    Enimad minim veniam quis nostrud
                                    exercitation ullamco laboris. Lorem ipsum
                                    dolor sit amet cons aetetur adipisicing elit
                                    sedo eiusmod tempor.Incididunt labore et
                                    dolore magna aliqua. sed ayd minim veniam.
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="product-details-apartments-info-list  section-bg-1">
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="apartments-info-list apartments-info-list-color">
                                        <ul>
                                          <li>
                                            <label>Total Area</label>{" "}
                                            <span>2800 Sq. Ft</span>
                                          </li>
                                          <li>
                                            <label>Bedroom</label>{" "}
                                            <span>150 Sq. Ft</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="apartments-info-list apartments-info-list-color">
                                        <ul>
                                          <li>
                                            <label>Belcony/Pets</label>
                                            <span>Allowed</span>
                                          </li>
                                          <li>
                                            <label>Lounge</label>
                                            <span>650 Sq. Ft</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <div className="ltn__product-tab-content-inner">
                            <div className="row">
                              <div className="col-lg-7">
                                <div className="apartments-plan-img">
                                  <img src="/img/others/10.png" alt="#" />
                                </div>
                              </div>
                              <div className="col-lg-5">
                                <div className="apartments-plan-info">
                                  <h2>Second Floor</h2>
                                  <p>
                                    Enimad minim veniam quis nostrud
                                    exercitation ullamco laboris. Lorem ipsum
                                    dolor sit amet cons aetetur adipisicing elit
                                    sedo eiusmod tempor.Incididunt labore et
                                    dolore magna aliqua. sed ayd minim veniam.
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="product-details-apartments-info-list  section-bg-1">
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="apartments-info-list apartments-info-list-color">
                                        <ul>
                                          <li>
                                            <label>Total Area</label>{" "}
                                            <span>2800 Sq. Ft</span>
                                          </li>
                                          <li>
                                            <label>Bedroom</label>{" "}
                                            <span>150 Sq. Ft</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="apartments-info-list apartments-info-list-color">
                                        <ul>
                                          <li>
                                            <label>Belcony/Pets</label>{" "}
                                            <span>Allowed</span>
                                          </li>
                                          <li>
                                            <label>Lounge</label>{" "}
                                            <span>650 Sq. Ft</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <div className="ltn__product-tab-content-inner">
                            <div className="row">
                              <div className="col-lg-7">
                                <div className="apartments-plan-img">
                                  <img src="/img/others/10.png" alt="#" />
                                </div>
                              </div>
                              <div className="col-lg-5">
                                <div className="apartments-plan-info">
                                  <h2>Third Floor</h2>
                                  <p>
                                    Enimad minim veniam quis nostrud
                                    exercitation ullamco laboris. Lorem ipsum
                                    dolor sit amet cons aetetur adipisicing elit
                                    sedo eiusmod tempor.Incididunt labore et
                                    dolore magna aliqua. sed ayd minim veniam.
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="product-details-apartments-info-list  section-bg-1">
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="apartments-info-list apartments-info-list-color">
                                        <ul>
                                          <li>
                                            <label>Total Area</label>{" "}
                                            <span>2800 Sq. Ft</span>
                                          </li>
                                          <li>
                                            <label>Bedroom</label>{" "}
                                            <span>150 Sq. Ft</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="apartments-info-list apartments-info-list-color">
                                        <ul>
                                          <li>
                                            <label>Belcony/Pets</label>{" "}
                                            <span>Allowed</span>
                                          </li>
                                          <li>
                                            <label>Lounge</label>{" "}
                                            <span>650 Sq. Ft</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <div className="ltn__product-tab-content-inner">
                            <div className="row">
                              <div className="col-lg-7">
                                <div className="apartments-plan-img">
                                  <img src="/img/others/10.png" alt="#" />
                                </div>
                              </div>
                              <div className="col-lg-5">
                                <div className="apartments-plan-info">
                                  <h2>Top Garden</h2>
                                  <p>
                                    Enimad minim veniam quis nostrud
                                    exercitation ullamco laboris. Lorem ipsum
                                    dolor sit amet cons aetetur adipisicing elit
                                    sedo eiusmod tempor.Incididunt labore et
                                    dolore magna aliqua. sed ayd minim veniam.
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="product-details-apartments-info-list  section-bg-1">
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="apartments-info-list apartments-info-list-color">
                                        <ul>
                                          <li>
                                            <label>Total Area</label>{" "}
                                            <span>2800 Sq. Ft</span>
                                          </li>
                                          <li>
                                            <label>Bedroom</label>{" "}
                                            <span>150 Sq. Ft</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="apartments-info-list apartments-info-list-color">
                                        <ul>
                                          <li>
                                            <label>Belcony/Pets</label>{" "}
                                            <span>Allowed</span>
                                          </li>
                                          <li>
                                            <label>Lounge</label>{" "}
                                            <span>650 Sq. Ft</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div> */}

                  {/* <!-- APARTMENTS PLAN AREA END --> */}

                  {/* <h4 className="title-2">Property Video</h4>
                  <div
                    className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60"
                    style={{ backgroundImage: `url("../../img/others/5.jpg")` }}
                  >
                    <button
                      className="ltn__video-icon-2 ltn__video-icon-2-border---"
                      onClick={() => setOpen(true)}
                    >
                      <FaPlay />
                    </button>
                  </div>

                  <div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60">
                    <h4 className="title-2">Customer Reviews</h4>
                    <div className="product-ratting">
                      <ul>
                        <li>
                          <a href="#">
                            <FaStar />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaStar />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaStar />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaStar />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaRegStar />
                          </a>
                        </li>
                        <li className="review-total">
                          <a href="#"> ( 95 Reviews )</a>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div className="ltn__comment-area mb-30">
                      <div className="ltn__comment-inner">
                        <ul>
                          <li>
                            <div className="ltn__comment-item clearfix">
                              <div className="ltn__commenter-img">
                                <img src="/img/testimonial/1.jpg" alt="Image" />
                              </div>
                              <div className="ltn__commenter-comment">
                                <h6>
                                  <a href="#">Adam Smit</a>
                                </h6>
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaRegStar />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Doloribus, omnis fugit
                                  corporis iste magnam ratione.
                                </p>
                                <span className="ltn__comment-reply-btn">
                                  September 3, 2020
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ltn__comment-item clearfix">
                              <div className="ltn__commenter-img">
                                <img src="/img/testimonial/3.jpg" alt="Image" />
                              </div>
                              <div className="ltn__commenter-comment">
                                <h6>
                                  <a href="#">Adam Smit</a>
                                </h6>
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaRegStar />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Doloribus, omnis fugit
                                  corporis iste magnam ratione.
                                </p>
                                <span className="ltn__comment-reply-btn">
                                  September 2, 2020
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ltn__comment-item clearfix">
                              <div className="ltn__commenter-img">
                                <img src="/img/testimonial/2.jpg" alt="Image" />
                              </div>
                              <div className="ltn__commenter-comment">
                                <h6>
                                  <a href="#">Adam Smit</a>
                                </h6>
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaRegStar />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Doloribus, omnis fugit
                                  corporis iste magnam ratione.
                                </p>
                                <span className="ltn__comment-reply-btn">
                                  September 2, 2020
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ltn__comment-reply-area ltn__form-box mb-30">
                      <form action="#">
                        <h4>Add a Review</h4>
                        <div className="mb-30">
                          <div className="add-a-review">
                            <h6>Your Ratings:</h6>
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <FaStar />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FaStar />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FaStar />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FaStar />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FaStar />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="input-item input-item-textarea ltn__custom-icon">
                          <textarea placeholder="Type your comments...."></textarea>
                          <span className="inline-icon">
                            <FaPencilAlt />
                          </span>
                        </div>
                        <div className="input-item input-item-name ltn__custom-icon">
                          <input type="text" placeholder="Type your name...." />
                          <span className="inline-icon">
                            <FaUserAlt />
                          </span>
                        </div>
                        <div className="input-item input-item-email ltn__custom-icon">
                          <input
                            type="email"
                            placeholder="Type your email...."
                          />
                          <span className="inline-icon">
                            <FaEnvelope />
                          </span>
                        </div>
                        <div className="input-item input-item-website ltn__custom-icon">
                          <input
                            type="text"
                            name="website"
                            placeholder="Type your website...."
                          />
                          <span className="inline-icon">
                            <FaGlobe />
                          </span>
                        </div>
                        <label className="mb-0">
                          <input type="checkbox" name="agree" /> Save my name,
                          email, and website in this browser for the next time I
                          comment.
                        </label>
                        <div className="btn-wrapper">
                          <button
                            className="btn theme-btn-1 btn-effect-1 text-uppercase"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>  */}

                  {/* <h4 className="title-2">Related Properties</h4>
                  <Row>
                    {relatedProducts.map((data, key) => {
                      const slug = productSlug(data.title);
                      const discountedPrice = getDiscountPrice(
                        product.price,
                        product.discount
                      ).toFixed(2);
                      const productPrice = product.price.toFixed(2);
                      const cartItem = cartItems.find(
                        (cartItem) => cartItem.id === product.id
                      );
                      const wishlistItem = wishlistItems.find(
                        (wishlistItem) => wishlistItem.id === product.id
                      );
                      const compareItem = compareItems.find(
                        (compareItem) => compareItem.id === product.id
                      );
                      return (
                        <Col xs={12} sm={6} key={key}>
                          <RelatedProduct
                            productData={data}
                            slug={slug}
                            baseUrl="shop/grid"
                            discountedPrice={discountedPrice}
                            productPrice={productPrice}
                            cartItem={cartItem}
                            wishlistItem={wishlistItem}
                            compareItem={compareItem}
                          />
                        </Col>
                      );
                    })}
                  </Row> */}
                </div>
              </div>

              {/* <div className="col-lg-4">
                <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
                   <div className="widget ltn__author-widget">
                    <div className="ltn__author-widget-inner text-center">
                      <img
                        src={`/img/team/${product.agent.img}`}
                        alt={`${product.agent.fullName}`}
                      />
                      <h5>{product.agent.fullName}</h5>
                      <small>{product.agent.designation}</small>
                      <div className="product-ratting">
                        <ul>
                          <li>
                            <a href="#">
                              <FaStar />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaStar />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaStar />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaStar />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaRegStar />
                            </a>
                          </li>
                          <li className="review-total">
                            {" "}
                            <Link href="#">
                              {" "}
                              ( {product.agent.raiting} Reviews )
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <p>{product.agent.description}</p>

                      <div className="ltn__social-media">
                        <ul>
                          <li>
                            <a href="#" title="Facebook">
                              <FaFacebookF />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Twitter">
                              <FaTwitter />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Linkedin">
                              <FaInstagram />
                            </a>
                          </li>

                          <li>
                            <a href="#" title="Youtube">
                              <FaDribbble />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>  <div className="widget ltn__search-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      Search Objects
                    </h4>
                    <form action="#">
                      <input
                        type="text"
                        name="search"
                        placeholder="Search your keyword..."
                      />
                      <button type="submit">
                        <FaSearch />
                      </button>
                    </form>
                  </div>  <div className="widget ltn__form-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      Drop Messege For Book
                    </h4>
                    <form action="#">
                      <input
                        type="text"
                        name="yourname"
                        placeholder="Your Name*"
                      />
                      <input
                        type="text"
                        name="youremail"
                        placeholder="Your e-Mail*"
                      />
                      <textarea
                        name="yourmessage"
                        placeholder="Write Message..."
                      ></textarea>
                      <button type="submit" className="btn theme-btn-1">
                        Send Messege
                      </button>
                    </form>
                  </div>  <div className="widget ltn__top-rated-product-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      Top Rated Product
                    </h4>
                    <ul>
                      {topRatedProducts.map((product, keys) => {
                        const slug = productSlug(product.title);
                        let key = keys + 1;
                        return (
                          <li key={product.id}>
                            <div className="top-rated-product-item clearfix">
                              <div className="top-rated-product-img">
                                <a href={slug}>
                                  <img
                                    src={`/img/product/${key}.png`}
                                    alt={product.title}
                                  />
                                </a>
                              </div>
                              <div className="top-rated-product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h6>
                                  <a href={slug}>{product.title}</a>
                                </h6>
                                <div className="product-price">
                                  <span>${product.price}</span>
                                  <del>${discountedPrice}</del>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div> <div className="widget ltn__menu-widget ltn__menu-widget-2--- ltn__menu-widget-2-color-2---">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      Top Categories
                    </h4>
                    <ul>
                      <li>
                        <Link href="#">
                          Apartments <span>(26)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Picture Stodio <span>(30)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Office <span>(71)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Luxary Vilas <span>(56)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Duplex House <span>(60)</span>
                        </Link>
                      </li>
                    </ul>
                  </div> <div className="widget ltn__popular-product-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      Popular Properties
                    </h4>

                    <Slider
                      {...popular_product}
                      className="row ltn__popular-product-widget-active slick-arrow-1"
                    >

                      {popularProducts.map((product, key) => {
                        const slug = productSlug(product.title);
                        return (
                          <div
                            key={key}
                            className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---"
                          >
                            <div className="product-img">
                              <Link href={slug}>
                                <img
                                  src={`/img/product-3/${product.productImg}`}
                                  alt={slug}
                                />
                              </Link>
                              <div className="real-estate-agent">
                                <div className="agent-img">
                                  <Link href={slug}>
                                    <img src={`/img/blog/author.jpg`} alt="#" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="product-info">
                              <div className="product-price">
                                <span>
                                  ${product.price}
                                  <label>/Month</label>
                                </span>
                              </div>
                              <h2 className="product-title">
                                <Link href={slug}>{product.title}</Link>
                              </h2>
                              <div className="product-img-location">
                                <ul>
                                  <li>
                                    <Link href="product-details">
                                      <i className="flaticon-pin"></i>
                                      Hyderbad
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                <li>
                                  <span>
                                    {product.propertyDetails.bedrooms}
                                  </span>
                                  <span className="ms-1">Bedrooms</span>
                                </li>
                                <li>
                                  <span>{product.propertyDetails.baths}</span>
                                  <span className="ms-1">Bathrooms</span>
                                </li>
                                <li>
                                  <span>{product.propertyDetails.area}</span>
                                  <span className="ms-1">square Ft</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </div> <div className="widget ltn__popular-post-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      Leatest Blogs
                    </h4>
                    <ul>
                      {latestdBlogs.map((blog, key) => {
                        const slug = productSlug(blog.title);
                        let imagecount = key + 1;

                        return (
                          <li key={key}>
                            <div className="popular-post-widget-item clearfix">
                              <div className="popular-post-widget-img">
                                <Link href={`/blog/${slug}`}>
                                  <img
                                    src={`/img/team/${imagecount}.jpg`}
                                    alt="#"
                                  />
                                </Link>
                              </div>
                              <div className="popular-post-widget-brief">
                                <h6>
                                  <Link href={`/blog/${slug}`}>
                                    {blog.title}
                                  </Link>
                                </h6>
                                <div className="ltn__blog-meta">
                                  <ul>
                                    <li className="ltn__blog-date">
                                      <Link href={`/blog/${slug}`}>
                                        <span>
                                          <FaCalendarAlt />
                                        </span>
                                        <span>{blog.date}</span>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>  <FollowUs title="Follow Us" />  <Tags title="Popular Tags" /> 
                </aside>
              </div> */}
            </div>
          </div>
        </div>
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
        <div
          className="ltn__call-to-action-area call-to-action-6 before-bg-bottom"
          data-bs-bg="img/1.jpg--"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
                  <div className="coll-to-info text-color-white">
                    <h1>Looking for a dream home?</h1>
                    <p>We can help you realize your dream of a new home</p>
                  </div>
                  <div className="btn-wrapper">
                    <Link
                      className="btn btn-effect-3 btn-white"
                      href="/services"
                    >
                      Explore Properties <i className="icon-next"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- CALL TO ACTION END --> */}
      </LayoutOne>

    </>
  );
}

export default ProductDetails;

export async function getStaticProps({ params }) {
  // get product data based on slug
  const product = products.filter(
    (single) => productSlug(single.title) === params.slug
  )[0];

  return { props: { product } };
}

export async function getStaticPaths() {
  // get the paths we want to pre render based on products
  const paths = products.map((product) => ({
    params: { slug: productSlug(product.title) },
  }));

  return { paths, fallback: false };
}
