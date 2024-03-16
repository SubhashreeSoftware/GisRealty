import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cart-slice";
import { useState } from "react";
import {
  addToWishlist,
  deleteFromWishlist,
} from "@/store/slices/wishlist-slice";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import QuickViewtModal from "@/components/modals/quickViewModal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const ApartmentProduct = ({
  productData,
  slug,
  baseUrl,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
}) => {
  let badgeText = "";

//   if (productData.rent) {
//     badgeText = "For Rent";
//   } else {
//     badgeText = "For Sale";
//   }
//   const dispatch = useDispatch();
//   const [modalShow, setModalShow] = useState(false);

//   const wishListTooltip = (props) => (
//     <Tooltip id="button-tooltip" {...props}>
//       Wishlist
//     </Tooltip>
//   );
//   const quickViewTooltip = (props) => (
//     <Tooltip id="button-tooltip" {...props}>
//       Quick View
//     </Tooltip>
//   );
//   const addToCartTooltip = (props) => (
//     <Tooltip id="button-tooltip" {...props}>
//       Add To Cart
//     </Tooltip>
//   );
  return (
    <>
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
        <div className="product-img">
          {/* <Link href={`/${baseUrl}/${slug}`}> */}
            <img
              src={`/img/product-3/5.jpg`}
            //   alt={`${productData.title}`}
            />
          {/* </Link> */}
        
        </div>
        <div className="product-info">
       
          <h2 className="product-title">
            {/* <Link href={`/${baseUrl}/${slug}`}> */}
            GR MAYOORA (KOMPALLY)
            {/* </Link> */}
          </h2>
          <div className="product-img-location">
            <ul>
              <li>
                {/* <Link href={`/${baseUrl}/${slug}`}> */}
                  <i className="flaticon-pin"></i>
                  Hyderbad
                {/* </Link> */}
              </li>
            </ul>
          </div>
          <ul className="ltn__plot-brief">
            <li>
              {/* <span>{productData.propertyDetails.bedrooms}</span> */}
              <span className="ms-1">Total Area   : 1.3Acres</span>
            </li>
            <li>
              {/* <span>{productData.propertyDetails.baths}</span> */}
              <span className="ms-1">Towers       : 2</span>
            </li>
            <li>
              {/* <span>{productData.propertyDetails.area}</span> */}
              <span className="ms-1">Total Floors : G+5</span>
            </li>
          </ul>
        
        </div>
        <div className="product-info-bottom">
          <div className="product-price">
            <span>
              <label>Price Starts From </label> 64Lakhs
              {/* {` Rs. ${productData.price}`} */}
            </span>
          </div>
        </div>
      </div>
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
        <div className="product-img">
          {/* <Link href={`/${baseUrl}/${slug}`}> */}
            <img
              src={`/img/product-3/5.jpg`}
            //   alt={`${productData.title}`}
            />
          {/* </Link> */}
        
        </div>
        <div className="product-info">
       
          <h2 className="product-title">
            {/* <Link href={`/${baseUrl}/${slug}`}> */}
            LUMBINI ELYSEE (FINANCIAL DISTRICT)
            {/* </Link> */}
          </h2>
          <div className="product-img-location">
            <ul>
              <li>
                {/* <Link href={`/${baseUrl}/${slug}`}> */}
                  <i className="flaticon-pin"></i>
                  Hyderbad
                {/* </Link> */}
              </li>
            </ul>
          </div>
          <ul className="ltn__plot-brief">
            <li>
              {/* <span>{productData.propertyDetails.bedrooms}</span> */}
              <span className="ms-1">Total Area : 2.3Acres</span>
            </li>
            <li>
              {/* <span>{productData.propertyDetails.baths}</span> */}
              <span className="ms-1">Towers : 10</span>
            </li>
            <li>
              {/* <span>{productData.propertyDetails.area}</span> */}
              <span className="ms-1">Total Floors : G+15</span>
            </li>
          </ul>
        
        </div>
        <div className="product-info-bottom">
          <div className="product-price">
            <span>
              <label>Price Starts From 2.01cr</label>
              {/* {` Rs. ${productData.price}`} */}
            </span>
          </div>
        </div>
      </div>
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
        <div className="product-img">
          {/* <Link href={`/${baseUrl}/${slug}`}> */}
            <img
              src={`/img/product-3/5.jpg`}
            //   alt={`${productData.title}`}
            />
          {/* </Link> */}
        
        </div>
        <div className="product-info">
       
          <h2 className="product-title">
            {/* <Link href={`/${baseUrl}/${slug}`}> */}
            SMR VINAY ICONIA (KONDAPUR)
            {/* </Link> */}
          </h2>
          <div className="product-img-location">
            <ul>
              <li>
                {/* <Link href={`/${baseUrl}/${slug}`}> */}
                  <i className="flaticon-pin"></i>
                  Hyderbad
                {/* </Link> */}
              </li>
            </ul>
          </div>
          <ul className="ltn__plot-brief">
            <li>
              {/* <span>{productData.propertyDetails.bedrooms}</span> */}
              <span className="ms-1">Total Area  : 22Acres</span>
            </li>
            <li>
              {/* <span>{productData.propertyDetails.baths}</span> */}
              <span className="ms-1">Towers : 11</span>
            </li>
            <li>
              {/* <span>{productData.propertyDetails.area}</span> */}
              <span className="ms-1">Total Floors: 26-30</span>
            </li>
          </ul>
        
        </div>
        <div className="product-info-bottom">
          <div className="product-price">
            <span>
              <label>Price Starts From </label> 1.25cr
              {/* {` Rs. ${productData.price}`} */}
            </span>
          </div>
        </div>
      </div>
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
        <div className="product-img">
          {/* <Link href={`/${baseUrl}/${slug}`}> */}
            <img
              src={`/img/product-3/5.jpg`}
            //   alt={`${productData.title}`}
            />
          {/* </Link> */}
        
        </div>
        <div className="product-info">
       
          <h2 className="product-title">
            {/* <Link href={`/${baseUrl}/${slug}`}> */}
            CANDEUR LAKESCAPE (KONDAPUR)
            {/* </Link> */}
          </h2>
          <div className="product-img-location">
            <ul>
              <li>
                {/* <Link href={`/${baseUrl}/${slug}`}> */}
                  <i className="flaticon-pin"></i>
                  Hyderbad
                {/* </Link> */}
              </li>
            </ul>
          </div>
          <ul className="ltn__plot-brief">
            <li>
              {/* <span>{productData.propertyDetails.bedrooms}</span> */}
              <span className="ms-1">Total Area : 9Acres</span>
            </li>
            <li>
              {/* <span>{productData.propertyDetails.baths}</span> */}
              <span className="ms-1">Tower : 7</span>
            </li>
            <li>
              {/* <span>{productData.propertyDetails.area}</span> */}
              <span className="ms-1">Total Floor: G+47</span>
            </li>
          </ul>
        
        </div>
        <div className="product-info-bottom">
          <div className="product-price">
            <span>
              <label>Price Starts From 97Lakhs</label>
              {/* {` Rs. ${productData.price}`} */}
            </span>
          </div>
        </div>
      </div>
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
        <div className="product-img">
          {/* <Link href={`/${baseUrl}/${slug}`}> */}
            <img
              src={`/img/product-3/5.jpg`}
            //   alt={`${productData.title}`}
            />
          {/* </Link> */}
        
        </div>
        <div className="product-info">
       
          <h2 className="product-title">
            {/* <Link href={`/${baseUrl}/${slug}`}> */}
            CELESTIAL GREEN SPACE (KOKAPET)
            {/* </Link> */}
          </h2>
          <div className="product-img-location">
            <ul>
              <li>
                {/* <Link href={`/${baseUrl}/${slug}`}> */}
                  <i className="flaticon-pin"></i>
                  Hyderbad
                {/* </Link> */}
              </li>
            </ul>
          </div>
          <ul className="ltn__plot-brief">
            <li>
              {/* <span>{productData.propertyDetails.bedrooms}</span> */}
              <span className="ms-1">Total Area : 8.5Acres</span>
            </li>
            <li>
              {/* <span>{productData.propertyDetails.baths}</span> */}
              <span className="ms-1">Towers : 9 (Premium towers-2)</span>
            </li>
            <li>
              {/* <span>{productData.propertyDetails.area}</span> */}
              <span className="ms-1">Total Floors : G+9</span>
            </li>
          </ul>
        
        </div>
        <div className="product-info-bottom">
          <div className="product-price">
            <span>
              <label>Price Starts From </label> 82Lakhs
              {/* {` Rs. ${productData.price}`} */}
            </span>
          </div>
        </div>
      </div>
      {/* <QuickViewtModal
        productData={productData}
        show={modalShow}
        onHide={() => setModalShow(false)}
        slug={slug}
        discountedprice={discountedPrice}
        productprice={productPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
      /> */}
    </>
  );
};

export default ApartmentProduct;
