import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cart-slice";
import { useState } from "react";
import Image from "next/image";
import {
  addToWishlist,
  deleteFromWishlist,
} from "@/store/slices/wishlist-slice";
import QuickViewtModal from "@/components/modals/quickViewModal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const VillaProduct = ({
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
          <Link href={`/${baseUrl}/${slug}`}>
            <Image alt=""
              src={`/img/product-3/5.jpg`}
            //   alt={`${productData.title}`}
            />
          </Link>
        
        </div>
        <div className="product-info">
       
          <h2 className="product-title">
            {/* <Link href={`/${baseUrl}/${slug}`}> */}
            RIVERSCAPE (BANDLAGUDA)

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
              <span className="ms-1">Total Area : 22Acres</span>
            </li>
            <li>
              {/* <span>{productData.propertyDetails.baths}</span> */}
              <span className="ms-1">Total Units : 226</span>
            </li>
            <li>
              {/* <span>{productData.propertyDetails.area}</span> */}
              <span className="ms-1">Sizes : 200sqyds, 230sqyds, 300sqyds & 400sqyds</span>
            </li>
          </ul>
        
        </div>
        <div className="product-info-bottom">
          <div className="product-price">
            <span>
              <label>Price Starts From </label> 4crs
              {/* {` Rs. ${productData.price}`} */}
            </span>
          </div>
        </div>
      </div>
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
        <div className="product-img">
          {/* <Link href={`/${baseUrl}/${slug}`}> */}
            <Image alt=""
              src={`/img/product-3/5.jpg`}
            //   alt={`${productData.title}`}
            />
          {/* </Link> */}
        
        </div>
        <div className="product-info">
       
          <h2 className="product-title">
            {/* <Link href={`/${baseUrl}/${slug}`}> */}
            SURABHI SIGNATURE VILLAS (TELLAPUR)

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
              <span className="ms-1">Total Units : 67</span>
            </li>
            <li>
              {/* <span>{productData.propertyDetails.area}</span> */}
              <span className="ms-1">Sizes : 160sqyds, 170sqyds, 180sqyds & 200sqyds</span>
            </li>
          </ul>
        
        </div>
        <div className="product-info-bottom">
          <div className="product-price">
            <span>
              <label>Price Starts From </label> 2.7crs
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

export default VillaProduct;
