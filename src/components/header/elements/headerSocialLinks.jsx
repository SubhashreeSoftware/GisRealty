import Link from 'next/link';

import { FaDribbble,FaInstagram,FaTwitter,FaFacebookF, FaLinkedin} from 'react-icons/fa';
const HeaderSocialLinks = function () {
  return (
    <div className="ltn__social-media">
     
      <ul>
              <li>
                <Link href="https://m.facebook.com/gisrealty/">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/gisripl/
">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/gisrealty?igsh=MWdjNml5dGgxOTZ4cA==">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
    </div>
  );
};


export default HeaderSocialLinks;