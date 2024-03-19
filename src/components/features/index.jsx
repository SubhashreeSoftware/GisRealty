import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleSection from "@/components/titleSection";
import { productSlug } from "@/lib/product";import Image from "next/image";
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
                <Col key={key} xs={12} sm={6} lg={6}>

                  <div
                    className={`ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 ${item.active ? "active" : ""
                      }`} style={{ backgroundImage: `url(/img/icons/icon-img/${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '300px', position: 'relative', }}
                  >
                    <div className="ltn__feature-icon" >
                      {/* {iconTag ? (
                        <span>
                          <i className={`${item.icon}`}></i>
                        </span>
                      ) : (
                        <Image alt=""
                          src={`/img/icons/icon-img/${item.img}`}
                          
                        />
                      )} */}
                      <div style={{ position: 'absolute', top: '80%', flexDirection: "row", width: "100%" }}>
                      <Row>
                      <Col xs={6} >
                          <h3 style={{ color: '#fff', textAlign: 'left' }}>
                          {item.title}
                        </h3>
                        </Col>
                      
                        <Col xs={6}>
                      <Link href={`/service/${slug}`}>
                      

                          <p style={{ color: '#fff', fontWeight: "normal", 
                        textTransform: 'capitalize', 
                        fontSize: '15px', alignItems: "center", paddingTop: 10 }}>{item.buttonText}
                          {/* <Image alt=""
                            src={`/img/icons/icon-img/right-arrow.png`}
                            
                            style={{ height: '1%', width: '1%' }}
                          /> */}
<i className="flaticon-right-arrow"></i>

                        </p>
                        </Link>
                        </Col>
                        </Row>
                        </div>
                    </div>
                    
                    <div className="ltn__feature-info" >
                      {/*  <h3 style={{minHeight: 100, textAlign: "center"}}>
                      {slug === "commercial" ? (
        <Link href={`/shop/grid`}>Commercial</Link>
      ) : (
        <Link href={`/service/${slug}`}>{item.title}</Link>
      )}
                       <Link href={`/service/${slug}`}>{item.title}</Link>
                      </h3>
                      <p style={{ maxHeight: '11em', overflow: 'hidden', textOverflow: 'ellipsis', lineHeight: '1.8em', fontSize: 16,
        fontWeight: "bold" }}>{item.shortDescription}</p>  */}

                      {servicebtn ? (
                        <Link
                          className="ltn__service-btn"
                          href={`/service/${slug}`}
                        >
                          {/* {item.buttonText}

                          <i className="flaticon-right-arrow"></i> */}
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
