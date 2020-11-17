import React from "react";
import PropTypes from "prop-types";

const Heading = ({ children, size, overrideStyles }) => {
  const Tag = `h${size}`;
  if (size > 6) return null;
  return <Tag style={overrideStyles}>{children}</Tag>;
};

Heading.propTypes = {
  /** Used for content that will be shown inside the component */
  children: PropTypes.node.isRequired,
  /** Selects the desired \<h\> element to use */
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  /** Adds override custom styles to component */
  overrideStyles: PropTypes.string,
};

export default Heading;
