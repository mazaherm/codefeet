import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, srcSet, alt, className, width }) => (
  <picture>
    <source srcset={srcSet} media="(min-width: 700px)"></source>
    <img src={src} alt={alt} className={className} width={width} />
  </picture>
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
