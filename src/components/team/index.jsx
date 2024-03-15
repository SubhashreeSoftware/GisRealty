import Link from "next/link";
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedin } from "react-icons/fa";
const TeamItem = ({ data, baseUrl, slug, additionalClassname, additionalInfo }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const data2 = {
    id: "1",
    image: "4.jpg",
    name: "Mr. Mohammed Hussain",
    designation: "CMD",
    additionalInfo:
      "An alumnus of 'Haworth College of Business' from Western Michigan University- USA' , Mr Hussain brings in a vast exposure of more than two decades of experience in the Hospitality and Real Estate industry. He has been exponentially catering to the Real Estate industry by spearheading a few remarkable projects. He has travelled world over for work and business.",
    linkedin:
      "https://www.linkedin.com/in/mohammed-wajahat-hussain-559ab1b/",
    category: ["buying", "male"],
    featured: true,
    shortDescription:
      "GiS's expertise in real estate management is unmatched. They've helped me optimize the value of my properties and navigate through any challenges that arise. Working with them has been a game-changer for my investment portfolio.",
    information: {
      position: " Senior Property Seller",
      experience: "10+ Years",
      location: " 13/A, NYC",
      practiceArea: "Property Seller",
      email: " example@example.com",
      fax: " +0123-456 789",
      phone: "+0123-456 789",
    },
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu ntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    services: [
      {
        icon: "icon-tire",
        title: "Home Buying",
        description:
          "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or",
        readmore: "#",
        active: false,
      },
      {
        icon: "icon-mechanic",
        title: "Home selling",
        description:
          "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or",
        readmore: "#",
        active: true,
      },
      {
        icon: "icon-wheel-1",
        title: "Escrow Services",
        description:
          "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or",
        readmore: "#",
        active: false,
      },
    ],
    serviceDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu ntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  };
  return (
    <>
     
      <div className={`ltn__team-item ${additionalClassname}`}>
        <div className="team-img">
          <img src={`/img/team/${data.image}`} alt="Image" />
        </div>
        <div className="team-info">
        <h4>
          <Link href="">
          <span onClick={openModal}>{data.name}</span>
          </Link>
          </h4>
          <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton style={{padding: 20}}>
          {/* <Modal.Title>{data.name}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <img src={`/img/team/${data.image}`} alt="Image" />

          <p>{data.additionalInfo}</p>
        </Modal.Body>
      
      </Modal>
          <h6 className="ltn__secondary-color">{data.designation}</h6>
          <div className="ltn__social-media">
            <ul>
            
              <li>
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamItem;






