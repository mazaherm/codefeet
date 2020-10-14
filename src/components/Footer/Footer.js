import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarLinks from '@components/Navbar/NavbarLinks';
import { mainFooterLinks } from '@config/constants';


const Footer = () => {
    return(
			<Container>
				<Row>
					<Col>
						<p className="footer-text">2020 Mazaher Muraj</p>
						<p>Licensed under CC BY 4.0</p>
					</Col>
					<Col>
						<NavbarLinks links={mainFooterLinks} />
					</Col>
				</Row>
			</Container>
    );
}

export default Footer;