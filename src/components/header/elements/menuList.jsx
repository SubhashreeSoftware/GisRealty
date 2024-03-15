import Link from "next/link";
import { FaPlus, FaAngleDoubleRight } from "react-icons/fa";
const MenuList = ({ addListing }) => {
  return (
    <ul>
      <li className="menu-icon">
        <Link href="/">
          Home 
        </Link>
      </li>
      <li className="menu-icon">
        <Link href="/about">
          About
        </Link>
      </li>
      {/* <li className="menu-icon">
        <Link href="/service">
          Services 
        </Link>
      </li> */}
      <li className="menu-icon">
        <Link href="/service">
        Services
        </Link>
        <ul>
         
          <li>
            <Link href="#">
            Residential
              <span className="float-end">
                <FaAngleDoubleRight />
              </span>
            </Link>
            <ul>
              <li>
                <Link href="/shop/list">Apartments</Link>
              </li>
              <li>
                <Link href="/shop/grid">Villas</Link>
              </li>
              <li>
                <Link href="/shop/grid">Plots</Link>
              </li>
              {/* <li>
                <Link href="/my-account">My Account</Link>
              </li>
              <li>
                <Link href="/login">Sign in</Link>
              </li>
              <li>
                <Link href="/register">Register</Link>
              </li> */}
            </ul>
          </li>
          <li>
            <Link href="/shop">Commercial</Link>
          </li>
          <li>
            <Link href="#">
            Value Added Services
              <span className="float-end">
                <FaAngleDoubleRight />
              </span>
            </Link>
            <ul>
              <li>
                <Link href="/cart">Digital Agency</Link>
              </li>
              <li>
                <Link href="/wishlist">Creative Agency</Link>
              </li>
              <li>
                <Link href="/wishlist">Post Sales</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/shop/list">Land Services</Link>
          </li>
          <li>
            <Link href="/shop">Properties Page</Link>
          </li>
        
          <li>
            <Link href="/shop/left-sidebar">Investment Banking</Link>
          </li>
          <li>
            <Link href="/shop/right-sidebar">Retail</Link>
          </li>
          <li>
            <Link href="/shop/right-sidebar">Hospitality</Link>
          </li>
          <li>
            <Link href="/shop/right-sidebar">Industrial and Logistics</Link>
          </li>
          <li>
            <Link href="/shop/right-sidebar">Strategic Advisory and Valuations</Link>
          </li>
          <li>
            <Link href="/shop/right-sidebar">Investment Management</Link>
          </li>
          <li>
            <Link href="/shop/right-sidebar">Flexible Workspaces</Link>
          </li>
          <li>
            <Link href="/shop/right-sidebar">Apartment and society Management</Link>
          </li>
        
        </ul>
      </li>
      {/* <li className="menu-icon">
        <Link href="#">
          News <FaPlus />
        </Link>
        <ul>
          <li>
            <Link href="/blog">News</Link>
          </li>
          <li>
            <Link href="/blog/grid">News Grid</Link>
          </li>
          <li>
            <Link href="/blog/left-sidebar">News Left sidebar</Link>
          </li>
          <li>
            <Link href="/blog/right-sidebar">News Right sidebar</Link>
          </li>
        </ul>
      </li> */}
      {/* <li className="menu-icon mega-menu-parent">
        <Link href="#">
          Pages <FaPlus />
        </Link>
        <ul className="mega-menu mega-menu column-4">
          <li>
            <Link href="#">Inner Pages</Link>
            <ul>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/portfolio/page-two">Portfolio - 02</Link>
              </li>

              <li>
                <Link href="/team">Team</Link>
              </li>

              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">Inner Pages</Link>
            <ul>
              <li>
                <Link href="/history">History</Link>
              </li>
              <li>
                <Link href="/add-listing">Add Listing</Link>
              </li>
              <li>
                <Link href="/locations">Google Map Locations</Link>
              </li>
              <li>
                <Link href="/404">404</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/coming-soon">Coming Soon</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">Property Pages</Link>
            <ul>
              <li>
                <Link href="/shop">Property</Link>
              </li>
              <li>
                <Link href="/shop/left-sidebar">Property Left sidebar</Link>
              </li>
              <li>
                <Link href="/shop/right-sidebar">Property right sidebar</Link>
              </li>
              <li>
                <Link href="/shop/grid">Property Grid</Link>
              </li>
              <li>
                <Link href="/shop/list">Property List</Link>
              </li>

              <li>
                <Link href="/cart">Cart</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/shop">
              <img src="/img/banner/menu-banner-1.jpg" alt="#" />
            </Link>
          </li>
        </ul>
      </li> */}
      <li>
        <Link href="/contact">Contact</Link>
      </li>

      {addListing ? (
        <li className="special-link">
          <Link href="/add-listing">Add Listing</Link>
        </li>
      ) : null}
    </ul>
  );
};

export default MenuList;
