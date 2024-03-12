import Link from 'next/link';

import { FaDribbble,FaInstagram,FaTwitter,FaFacebookF} from 'react-icons/fa';
const HeaderSocialLinks = function () {
  return (
    <div className="ltn__social-media">
      <ul>
        <li>
          <Link href="#">  <FaInstagram /> </Link>
        </li>
      </ul>
    </div>
  );
};


export default HeaderSocialLinks;