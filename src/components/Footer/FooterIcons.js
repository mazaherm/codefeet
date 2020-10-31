import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "gatsby";

const SocialIcons = styled((props) => <Link {...props} />)`
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

const FooterIcons = (props) => {
  return (
    <SocialIcons>
      <a target="_blank" href="https://github.com/mazaherm/">
        <FaGithub />
      </a>
      <a target="_blank" href="https://uk.linkedin.com/in/mazaher-muraj">
        <FaLinkedin />
      </a>
      <a target="_blank" href="mailto:mazaher.muraj@hotmail.co.uk">
        <FaEnvelope />
      </a>
    </SocialIcons>
  );
};

export default FooterIcons;
