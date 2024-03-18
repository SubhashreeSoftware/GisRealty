import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleSection from "@/components/titleSection";
import { productSlug } from "@/lib/product";
import React, { useState } from "react";
import Image from "next/image";
function Value({
  data,
  iconTag,
  servicebtn,
  titleSectionData,
  classes,
  headingClasses,
}) {
  
    const [selectedItem, setSelectedItem] = useState(null);

    const handleExploreClick = (item) => {
      setSelectedItem(item);
    };
  
    const renderDetailView = () => {
         if (selectedItem) {
            const firstLetter = selectedItem.shortDescription.slice(0, 1);
            const firstToEnd = selectedItem.shortDescription.slice(1);
     
        return (
          <div className="detail-view">
            <div  style={{paddingBottom: 20, alignSelf: "right"}}>
            <button onClick={() => setSelectedItem(null)}>Close</button>

            </div>

            {/* Render detailed view based on selectedItem */}
            <h2>{selectedItem.captions.caption}</h2>
            <div>
           <Row>
              <Col xs={12} >
                <div className="ltn__page-details-inner ltn__service-details-inner">
                <Col xs={12} >
                <Row>
                <Col xs={12} lg={6} >
                  <div className="ltn__blog-img">
                    <Image alt=""
                      src={`/img/service/${selectedItem.thumbImage}`}
                      
                    />
                  </div>
                  </Col>
                  <Col xs={12} lg={6} >
                  <div className="ltn__blog-img">
                    <Image alt=""
                      src={`/img/service/${selectedItem.thumbImage}`}
                      
                    />
                  </div>
                  </Col>
                  </Row>
                  </Col>
                  
                  <p className="overflow-hidden">
                    <span className="ltn__first-letter">{firstLetter}</span>
                    {firstToEnd}
                  </p>
                  <p>{selectedItem.captions.captionShortDescription}</p>
                  <p>{selectedItem.captions.captionFullDescription}</p>
                  {/* <Row>
                    <Col xs={12} lg={6}>
                      <Image alt=""
                        src={`/img/service/${service.captions.image1}`}
                        
                      />
                      <label>{service.captions.caption}</label>
                    </Col>
                    <Col xs={12} lg={6}>
                      <Image alt=""
                        src={`/img/service/${service.captions.image2}`}
                        
                      />
                    </Col>
                  </Row>
                  <p>{service.captions.captionFullDescription}</p>
                  <p>{service.captions.captionShortDescription}</p> */}
                </div>
              </Col>
           
            </Row>
        </div>
          </div>
        );
      }
      return null;
    };
  return (
    <>
      <div className={`ltn__feature-area pt-15 pb-20 ${classes}`}>
        <Container>
        {selectedItem ? (
        <>{renderDetailView()}</>
      ) : (
        <>
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
                      }`} 
                    //   style={{ backgroundImage: `url(/img/icons/icon-img/${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '300px', position: 'relative', }}
                  >
                    <div className="ltn__feature-icon" >
                      {/* {iconTag ? (
                        <span>
                          <i className={`${item.icon}`}></i>
                        </span>
                      ) : ( */}
                        <Image alt=""
                          src={`/img/icons/icon-img/${item.img}`}
                          
                        />
                      {/* )} */}
                      <div style={{ position: 'absolute', top: '80%', flexDirection: "row", width: "100%" }}>
                      <Row>
                      <Col xs={6} >
                        <h3 style={{  textAlign: "left" }}>
                          {item.title}
                        </h3>
                        </Col>
                        <Col xs={6}>
                        {/* <Link href={`/service/${slug}`} style={{alignSelf: "flex-start",textAlign: "left"}}> */}
                        <span
                              style={{
                                fontWeight: "normal",
                                textTransform: 'capitalize',
                                fontSize: '15px',
                                cursor: 'pointer' // Add cursor pointer
                              }}
                              onClick={() => handleExploreClick(item)} // Call function on click
                            >Explore
                          {/* <Image alt=""
                            src={`/img/icons/icon-img/right-arrow.png`}
                            
                            style={{ height: '1%', width: '1%' }}
                          /> */}
                           {/* <span>
                          <i className="fas arrow-right"></i>
                        </span> */}
                        </span>
                        {/* </Link> */}
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
          </Row></>
      )
        }
        </Container>
      </div>
    </>
  );
}

export default Value;
