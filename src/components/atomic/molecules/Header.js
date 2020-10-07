import React from 'react';
import { Link } from 'gatsby';
import { useSiteMetadata } from '@hooks/useSiteMetadata';

const Header = () => {
  const { title, description } = useSiteMetadata();
  return (
    <Link to='/'>
      <h1>{title}</h1>
      <p>{description}</p>
    </Link>
  )
};

export default Header;
