import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, srcSet, alt, className }) => (
  <img src={src} srcset={srcSet} alt={alt} className={className} />
);

Image.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.objectOf(PropTypes.string),
  alt: PropTypes.string,
  className: PropTypes.string,
};

Image.defaultProps = {
  src: "",
  srcSet: null,
  alt: "",
  className: "",
};

export default Image;
