import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { LayoutOne } from "@/layouts";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";

export default function plot() {
  return (
    <div>
       <LayoutOne topbar={true}>
        {/* <!-- BREADCRUMB AREA START --> */}

        <ShopBreadCrumb
          title="Service Details"
          sectionPace=""
          currentSlug="Plots"
        />
          <Container>

    <Row>
       <Col xs={12} >
         <div className="ltn__page-details-inner ltn__service-details-inner">
         <Col xs={12} >
         <Row>
         <Col xs={12} lg={6} >
           <div className="ltn__blog-img">
             <img
               src={`/img/service/1.jpg`}
               alt="Image"
             />
           </div>
           </Col>
           <Col xs={12} lg={6} >
           <div className="ltn__blog-img">
             <img
               src={`/img/service/1.jpg`}
               alt="Image"
             />
           </div>
           </Col>
           </Row>
           </Col>
           
           <p className="overflow-hidden">
             <span className="ltn__first-letter">E</span>
             levate Customer Experience with Post-Sales Support Solutions
           </p>
           <p>In today's competitive landscape, exceptional post-sales support is essential for fostering customer loyalty and driving long-term success. At GIS, we understand the importance of delivering outstanding post-sales experiences that exceed customer expectations and maximize satisfaction.
</p>
<p>
Customer Service Excellence: Our dedicated customer service team is committed to providing prompt and effective assistance to address customer inquiries, resolve issues, and ensure a positive experience throughout the post-sales journey. Technical Support: From troubleshooting technical issues to providing product demonstrations and training, our technical support specialists are equipped with the knowledge and expertise to assist customers with any technical challenges they may encounter.
<br></br><br></br>Order Fulfillment and Logistics: Streamline order processing, shipping, and delivery with our efficient order fulfillment and logistics solutions. We ensure timely and accurate delivery of products, minimizing delays and maximizing customer satisfaction. Product Training and Education: Empower customers to make the most of their purchases with comprehensive product training and education programs. From online tutorials to in-person workshops, we provide valuable resources to help customers unlock the full potential of their products.</p>
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
     </Container>
     </LayoutOne>
 </div>
  )
}
