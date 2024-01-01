import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <>
      <Container fluid={true} className="text-center footerSection">
        <Row>
          <Col lg={3} md={6} sm={12} className="p-5 text-justify">
            <h1 className="serviceName">Follow Me</h1>
            <a className="socialLink" href="/">
              <FontAwesomeIcon icon={faFacebook} />
              Facebook
            </a>
            <br />
            <a className="socialLink" href="/">
              <FontAwesomeIcon icon={faYoutube} />
              YouTube
            </a>
          </Col>

          <Col lg={3} md={6} sm={12} className="p-5 text-justify">
            <h1 className="serviceName">Address</h1>
            <p className="serviceDescription">#36 p-Block,Mirpur-11,Dhaka.</p>
            <p className="serviceDescription">
              <FontAwesomeIcon icon={faEnvelope} />
              siddikam1121@gamil.com
            </p>
            <p className="serviceDescription">
              <FontAwesomeIcon icon={faPhone} />
              01793842777
            </p>
          </Col>

          <Col lg={3} md={6} sm={12} className="p-5 text-justify">
            <h1 className="serviceName">Information</h1>
            <a className="footerLink" href="/">
              About Me
            </a>
            <br />
            <a className="footerLink" href="/">
              Contract Me
            </a>
            <br />
            <a className="footerLink" href="/">
              MyNew
            </a>
          </Col>

          <Col lg={3} md={6} sm={12} className="p-5 text-justify">
            <h1 className="serviceName">Legal</h1>
            <a className="footerLink" href="/">
              Refand Policy
            </a>
            <br />
            <a className="footerLink" href="/">
              Terms and Condition
            </a>
            <br />
            <a className="footerLink" href="/">
              Privacy Policy
            </a>
          </Col>
        </Row>
      </Container>

      <Container fluid="true" className="text-center copyRightSection">
        <a className="copyRightLink" href="/">
          Yousuf.com &copy; 2020-2021
        </a>
      </Container>
    </>
  );
};
