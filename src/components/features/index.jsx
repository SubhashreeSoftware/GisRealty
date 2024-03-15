import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleSection from "@/components/titleSection";
import { productSlug } from "@/lib/product";
function Feature({
  data,
  iconTag,
  servicebtn,
  titleSectionData,
  classes,
  headingClasses,
}) {
  return (
    <>
      <div className={`ltn__feature-area pt-115 pb-90 ${classes}`}>
        <Container>
          <Row>
            <Col xs={12}>
              <TitleSection
                titleSectionData={titleSectionData}
                sectionClasses={titleSectionData.sectionClasses}
                headingClasses={headingClasses}
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            {data.map((item, key) => {
              const slug = productSlug(item.title);
              return (
                <Col key={key} xs={12} sm={6} lg={4}>
                  
                  <div
                    className={`ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 ${
                      item.active ? "active" : ""
                    }`}
                  >
                    <div className="ltn__feature-icon" >
                      {iconTag ? (
                        <span>
                          <i className={`${item.icon}`}></i>
                        </span>
                      ) : (
                        <img
                          src={`/img/icons/icon-img/${item.img}`}
                          alt={`${item.title}`}
                        />
                      )}
                    </div>
                    <div className="ltn__feature-info" >
                      <h3 style={{minHeight: 100, textAlign: "center"}}>
                      {slug === "commercial" ? (
        <Link href={`/shop/grid`}>Commercial</Link>
      ) : (
        <Link href={`/service/${slug}`}>{item.title}</Link>
      )}
                        {/* <Link href={`/service/${slug}`}>{item.title}</Link> */}
                      </h3>
                      <p style={{ maxHeight: '7em', overflow: 'hidden', textOverflow: 'ellipsis', lineHeight: '1.8em' }}>{item.shortDescription}</p>

                      {servicebtn ? (
                        <Link
                          className="ltn__service-btn"
                          href={`/service/${slug}`}
                        >
                          {item.buttonText}

                          <i className="flaticon-right-arrow"></i>
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature;
