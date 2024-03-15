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






