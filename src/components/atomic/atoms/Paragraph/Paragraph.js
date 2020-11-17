import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledParagraph = styled.p`
  ${({ theme }) => `color: ${theme.palette.text.primary};`}
`;

const Paragraph = ({ children, ariaLabel, overrideStyles }) => (
  <StyledParagraph style={overrideStyles} aria-label={ariaLabel}>
    {children}
  </StyledParagraph>
);

Paragraph.propTypes = {
  /** Used to set the label value for screen readers */
  ariaLabel: PropTypes.string,
  /** Used for content that will be shown inside the component */
  children: PropTypes.node.isRequired,
  /** Adds override custom styles to component */
  overrideStyles: PropTypes.string,
};

export default Paragraph;
