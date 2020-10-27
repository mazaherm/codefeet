import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarLinks from '@components/Navbar/NavbarLinks';
import { mainFooterLinks } from '@config/constants';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {

	const date = new Date();

  return(
		<Container>
			<Row className="footer-container">
				<Col className="footer-text-col">
					<p className="footer-copyright">&copy; {date.getFullYear()} Mazaher Muraj</p>
					<p className="footer-license">Licensed under CC BY 4.0</p>
				</Col>
				<Col className="footer-links-col">
					<p className="footer-links-text">
						<NavbarLinks links={mainFooterLinks} className="footer-link-style"/>
					</p>
					<div className="social-links">
					<a target="_blank" href="https://github.com/mazaherm/"><FaGithub className="social-icon" /></a>
					<a target="_blank" href="https://uk.linkedin.com/in/mazaher-muraj"><FaLinkedin className="social-icon" /></a>
					<a target="_blank" href="mailto:mazaher.muraj@hotmail.co.uk"><FaEnvelope className="social-icon" /></a>
					</div>
				</Col>
			</Row>
		</Container>
  );
}

export default Footer;