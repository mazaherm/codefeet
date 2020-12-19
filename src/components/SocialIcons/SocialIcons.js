import React from "react";
import styled from "styled-components";

const SocialIcons = styled.div`
  svg {
    ${({ theme }) => `color: ${theme.palette.text.primary}`};
    min-height: 25px;
    min-width: 45px;

    &:hover {
      ${({ theme }) => `color: ${theme.palette.text.secondary}`};
      transition: ease-in 0.1s;
    }
  }
`;

const SocialIcon = ({ iconComponent, link }) => (
  <SocialIcons>
    <a target="_blank" href={link}>
      {iconComponent}
    </a>
  </SocialIcons>
);

export default SocialIcon;
