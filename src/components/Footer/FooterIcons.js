import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaMedium,
} from "react-icons/fa";
import links from "@config/links";
import SocialIcon from "@components/SocialIcons";

const { GITHUB, LINKEDIN, STACKOVERFLOW, MEDIUM } = links;

const FooterIcons = () => (
  <>
    <SocialIcon link={GITHUB} iconComponent={<FaGithub />} />
    <SocialIcon link={MEDIUM} iconComponent={<FaMedium />} />
    <SocialIcon link={LINKEDIN} iconComponent={<FaLinkedin />} />
    <SocialIcon link={STACKOVERFLOW} iconComponent={<FaStackOverflow />} />
  </>
);

export default FooterIcons;
