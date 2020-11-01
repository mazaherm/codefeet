import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import config from "../../config";

const EMAIL = config.EMAIL;
const GITHUB = config.GITHUB;
const LINKEDIN = config.LINKEDIN;

const SocialIcons = styled.div`
  svg {
    color: #2f3640;
    min-height: 35px;
    min-width: 55px;
    padding-left: 20px;
    margin-right: 13px;

    &:hover {
      color: #5a78f1;
      transition: ease-in 0.1s;
    }
  }
`;

const FooterIcons = () => {
  return (
    <SocialIcons>
      <a target="_blank" href={GITHUB}>
        <FaGithub />
      </a>
      <a target="_blank" href={LINKEDIN}>
        <FaLinkedin />
      </a>
      <a target="_blank" href={`mailto:${EMAIL}`}>
        <FaEnvelope />
      </a>
    </SocialIcons>
  );
};

export default FooterIcons;
