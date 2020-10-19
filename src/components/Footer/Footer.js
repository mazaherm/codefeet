import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarLinks from '@components/Navbar/NavbarLinks';
import FooterLinks from '@components/Footer/FooterLinks';
import { mainFooterLinks } from '@config/constants';
import gitlogo from './gitlogo.svg';
import linkedinlogo from './linkedin-logo.png';


//import { mainSocialLinks } from '@config/constants';

const Footer = () => {
    return(
			<Container>
				<Row className="footer-container">
					<Col className="footer-text-col">
						<p className="footer-copyright">&copy; 2020 Mazaher Muraj</p>
						<p className="footer-license">Licensed under CC BY 4.0</p>
					</Col>
					<Col className="footer-links-col">
						<p>
							<NavbarLinks links={mainFooterLinks} className="footer-link-style"/>
						</p>
						<div className="social-links">
						<a target="_blank" href="https://github.com/mazaherm/"><img className="social-icon" src={gitlogo}></img></a>
						<a target="_blank" href="https://uk.linkedin.com/in/mazaher-muraj"><img className="social-icon" src={linkedinlogo}></img></a>
						</div>
					</Col>
				</Row>
			</Container>
    );
}

export default Footer;