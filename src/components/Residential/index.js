import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleSection from "@/components/titleSection";
import { productSlug } from "@/lib/product";
function Residential({
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
                    }`} style={{ backgroundImage: `url(/img/icons/icon-img/${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '300px', position: 'relative', }}
                  >
                    <div className="ltn__feature-icon"  >
                      {/* {iconTag ? (
                        <span>
                          <i className={`${item.icon}`}></i>
                        </span>
                      ) : ( 
                        <img
                          src={`/img/icons/icon-img/${item.img}`}
                          alt={`${item.title}`}
                        />
                       )} */}
                       <div style={{ position: 'absolute', top: '85%', flexDirection: "row", width: "100%" }}>
                      <Row>
                      <Col xs={6} >
        <h3 style={{ color: '#fff', textAlign: 'left' }}>
            {item.title}
        </h3>
        </Col>
        <Col xs={6} >
        {item.title === "Apartments" ? (
        <Link href={`/shop/apartmentgrid`}><p style={{ color: '#fff',fontWeight: "normal", 
        textTransform: 'capitalize', paddingBottom: 20, 
        fontSize: '15px', alignItems: "center", paddingTop: 10 }}>Explore 
            <img
                      src={`/img/icons/icon-img/right-arrow.png`}
                      alt={`${item.title}`}
                      style={{height: '5%', width: '6%'}}
                    />
    </p></Link>
      ) : item.title === "Villas" ? (
        <Link href={`/shop/villagrid`}><p style={{ color: '#fff',fontWeight: "normal", 
        textTransform: 'capitalize', paddingBottom: 20, 
        fontSize: '15px', alignItems: "center", paddingTop: 10 }}>Explore 
    <img
                      src={`/img/icons/icon-img/right-arrow.png`}
                      alt={`${item.title}`}
                      style={{height: '5%', width: '6%'}}
                    />
    </p></Link>
     ) : (
        <Link href={`/shop/plot`}><p style={{ color: '#fff',fontWeight: "normal", 
        textTransform: 'capitalize', paddingBottom: 20, 
        fontSize: '15px', alignItems: "center", paddingTop: 10 }}>Explore 
                    <img
                      src={`/img/icons/icon-img/right-arrow.png`}
                      alt={`${item.title}`}
                      style={{height: '5%', width: '6%'}}
                    />
    </p></Link>
      )}
      </Col>
      </Row>
        {/* <Link href={`/shop/grid`}>
            <p style={{ color: '#fff',fontWeight: "normal", 
            textTransform: 'capitalize', paddingBottom: 20, 
            fontSize: '15px', alignItems: "center" }}>Explore 
        <img
                          src={`/img/icons/icon-img/right-arrow.png`}
                          alt={`${item.title}`}
                          style={{height: '5%', width: '6%'}}
                        />
        </p></Link> */}
    </div>
                    </div>
                    <div className="ltn__feature-info" >
                    {/*   <h3 style={{ textAlign: "center"}}>
                
        <Link href={`/shop/grid`}>{item.title}</Link>
    
                        <Link href={`/service/${slug}`}>{item.title}</Link>
                      </h3>
                      <p style={{ maxHeight: '11em', overflow: 'hidden', textOverflow: 'ellipsis', lineHeight: '1.8em', fontSize: 16,
        fontWeight: "bold" }}>{item.shortDescription}</p> */}

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

export default Residential;
