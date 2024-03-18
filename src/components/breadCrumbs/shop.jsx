import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { FaHome, FaAngleRight } from "react-icons/fa";

const ShopBreadCrumb = ({ title, currentSlug, sectionPace }) => {
  return (
    <>
      <div
        className={`ltn__breadcrumb-area text-left bg-overlay-black-30 bg-image ${sectionPace}`}
        style={{ backgroundImage: `url("../img/bg/142.png")` }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="ltn__breadcrumb-inner">
                <h1 className="page-title" style={{color: "white"}}>{title}</h1>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <Link href="/">
                        <span className="ltn__secondary-color">
                          <FaHome className="me-2" style={{color: "white"}} />
                        </span>
                        <span className="me-2" style={{color: "white"}}>Home</span>
                        <FaAngleRight style={{color: "white"}}/>
                      </Link>
                    </li>
                    <li style={{color: "white"}}>{currentSlug}</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ShopBreadCrumb;
