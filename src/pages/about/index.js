import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { getProducts, productSlug } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import TestimonialCarouselItem from "@/components/testimonialCarousel";
import testimonialData from "@/data/testimonial";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import CallToAction from "@/components/callToAction";
import AboutUsStyleOne from "@/components/aboutUs/aboutUsStyleOne";
import Feature from "@/components/features";
import featureData from "@/data/service"
import TeamItem from "@/components/team";
import TeamData from '@/data/team';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

function AboutUs() {
  const agents = getProducts(TeamData, "buying", "featured", 3);
  const featureDataSorted = getProducts(featureData, "buying", "featured", 3);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
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

  const testiMonialsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  const data2 = {
    id: "1",
    image: "4.jpg",
    name: "Mr. Mohammed Hussain",
    designation: "CMD",
    additionalInfo:
      "An alumnus of 'Haworth College of Business' from Western Michigan University- USA' , Mr Hussain brings in a vast exposure of more than two decades of experience in the Hospitality and Real Estate industry. He has been exponentially catering to the Real Estate industry by spearheading a few remarkable projects. He has travelled world over for work and business.",
    linkedin:
      "https://www.linkedin.com/in/mohammed-wajahat-hussain-559ab1b/",
    category: ["buying", "male"],
    featured: true,
    shortDescription:
      "GiS's expertise in real estate management is unmatched. They've helped me optimize the value of my properties and navigate through any challenges that arise. Working with them has been a game-changer for my investment portfolio.",
    information: {
      position: " Senior Property Seller",
      experience: "10+ Years",
      location: " 13/A, NYC",
      practiceArea: "Property Seller",
      email: " example@example.com",
      fax: " +0123-456 789",
      phone: "+0123-456 789",
    },
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu ntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    services: [
      {
        icon: "icon-tire",
        title: "Home Buying",
        description:
          "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or",
        readmore: "#",
        active: false,
      },
      {
        icon: "icon-mechanic",
        title: "Home selling",
        description:
          "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or",
        readmore: "#",
        active: true,
      },
      {
        icon: "icon-wheel-1",
        title: "Escrow Services",
        description:
          "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or",
        readmore: "#",
        active: false,
      },
    ],
    serviceDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu ntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  };
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb
          title="About Us"
          sectionPace=""
          currentSlug="About Us"
        />

        <AboutUsStyleOne sectionSpace="pb-90" />

       

        <div className="ltn__team-area pt-20 pb-90">
          <Container>
            <Row>
              <Col lg={12}>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "Team",
                    title: "Our Team",
                  }}
                />
              </Col>
            </Row>

            <Row>
            <div className="ltn__team-item">
                      <div className="team-img">
                        <img src={`/img/team/${data2.image}`} alt="Image" />
                      </div>
                      <div className="team-info">
                        <h4>
                          {/* <Link href=""> */}
                          <span onClick={openModal}>{data2.name}</span>
                          {/* </Link> */}
                        </h4>
                        <Modal show={showModal} onHide={closeModal}>
                          <Modal.Header closeButton style={{ padding: 20 }}>
                            {/* <Modal.Title>{data2.name}</Modal.Title> */}
                          </Modal.Header>
                          <Modal.Body>
                            <img src={`/img/team/${data2.image}`} alt="Image" />
                            <p>{data2.additionalInfo}</p>
                          </Modal.Body>
                        </Modal>
                        <h6 className="ltn__secondary-color">{data2.designation}</h6>
                        <div className="ltn__social-media">
                          <ul>
                            <li>
                              <a href={data2.linkedin} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
              {agents.map((data, key) => {
                const slug = productSlug(data.name);
               
                return (
                  <>
                  
                    <Col key={key} xs={12} sm={6} lg={{ span: 5, offset: 1 }} >
                      <TeamItem baseUrl="blog" data={data} slug={slug} additionalClassname="" />
                    </Col>
                  </>

                );
              })}
            </Row>
          </Container>
        </div>

        <Feature
          classes="section-bg-1"
          servicebtn={true}
          iconTag={false}
          data={featureDataSorted}
          titleSectionData={{
            sectionClasses: "text-center",
            subTitle: "Our Services",
            title: "Our Main Focus",
          }}
        />


        {/* <!-- BLOG AREA START (blog-3) -->  */}
        <div className="ltn__blog-area pb-70">
          <Container>
            <Row>
              <Col lg={12}>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "News & Blogs",
                    title: "Latest News Feeds",
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


        {/* <!-- TESTIMONIAL AREA START (testimonial-7) -->  */}
        {/* <div
          className="ltn__testimonial-area bg-image-top pt-115 pb-70"
          style={{ backgroundImage: `url("../img/bg/20.jpg")` }}
        >
          <Container>
            <Row>
              <Col lg={12}>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "Our Testimonial",
                    title: "Clients Feedback",
                  }}
                />
              </Col>
            </Row>

            <Slider
              {...testiMonialsettings}
              className="ltn__testimonial-slider-5-active slick-arrow-1"
            >
              {testimonialData.map((data, key) => {
                return (
                  <TestimonialCarouselItem key={key} data={data} />
                );
              })}
            </Slider>
          </Container>
        </div> */}
        {/* <!-- TESTIMONIAL AREA END --> */}

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

export default AboutUs;
