import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialIcons = styled.div`
  svg {
    min-height: 35px;
    min-width: 55px;
    padding-left: 20px;
    color: $text-primary;

    &:hover {
      color: $text-secondary;
      transition: ease-in 0.1s;
    }
  }
`;

const FooterIcons = () => {
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
