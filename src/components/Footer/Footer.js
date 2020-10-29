import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarLinks from '@components/Navbar/NavbarLinks';
import { mainFooterLinks } from '@config/constants';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';
import FooterIcons from './FooterIcons';

const FooterBox = styled(Row)`
	border-top: 2px black solid;

	@media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const FooterTextCol = styled(Col)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media (max-width: 700px) {
		flex-direction: column;
		align-items: center;
	}
`;

const FooterCopyright = styled.div`
	font-size: 15px;
	padding-top: 25px;
	margin-bottom: 8px;
`;

const FooterLicense = styled.div`
	font-size: 13px;
`;

const FooterLinkCol = styled(Col)`
	font-size: 14px;
	margin-top: 10px;
	padding-bottom: 20px;
`;

const FooterLinkText = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 20px;

	@media (max-width: 700px) {
		display: none;
	}
`;

const FooterLinkStyle = styled.div`
	text-transform: uppercase;

	&:hover {
		text-decoration: none;
		color: $background-primary !important;
		transition: ease-in 0.1s;
	}
`;

const SocialLink = styled.div`
	display: flex;
	justify-content: flex-end;

	@media (max-width: 700px) {
		flex-direction: row;
		justify-content: center;
	}
`;

const GitHubIcon = styled(FaGithub)`
	min-height: 35px;
	min-width: 60px;
	margin-right: 10px;
	padding-left: 20px;
	color: $text-primary;

	&:hover {
		  min-height: 35px;
  min-width: 60px;
  color: $text-secondary;
  transition: ease-in 0.1s;
	}
`;

const LinkedInIcon = styled(FaLinkedin)`
	min-height: 35px;
	min-width: 60px;
	margin-right: 10px;
	padding-left: 20px;
	color: $text-primary;

	&:hover {
		  min-height: 35px;
  min-width: 60px;
  color: $text-secondary;
  transition: ease-in 0.1s;
	}
`;

const EnvelopeIcon = styled(FaEnvelope)`
	min-height: 35px;
	min-width: 60px;
	margin-right: 10px;
	padding-left: 20px;
	color: $text-primary;

	&:hover {
		  min-height: 35px;
  min-width: 60px;
  color: $text-secondary;
  transition: ease-in 0.1s;
	}
`;

const Footer = () => {

	const date = new Date();

	return(
		<Container>
			<FooterBox>
				<FooterTextCol>
					<FooterCopyright>&copy; {date.getFullYear()} Mazaher Muraj</FooterCopyright>
					<FooterLicense>Licensed under CC BY 4.0</FooterLicense>
				</FooterTextCol>
				<FooterLinkCol>
					<FooterLinkText>
						<FooterLinkStyle>
						<NavbarLinks links={mainFooterLinks} className="footer-link-style"/>
						</FooterLinkStyle>
					</FooterLinkText>
					<SocialLink>
					<a target="_blank" href="https://github.com/mazaherm/"><GitHubIcon/></a>
					<a target="_blank" href="https://uk.linkedin.com/in/mazaher-muraj"><LinkedInIcon/></a>
					<a target="_blank" href="mailto:mazaher.muraj@hotmail.co.uk"><EnvelopeIcon/></a>
					</SocialLink>
				</FooterLinkCol>
			</FooterBox>
			<FooterIcons />
		</Container>
  );
}

export default Footer;