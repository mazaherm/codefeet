import React from 'react';
import { Link } from 'gatsby';
import { useSiteMetadata } from '@hooks/useSiteMetadata';

import Image from '@components/atomic/atoms/Image';
import codefeetLogo from '@images/codefeet-logo.png';

const Logo = () => {
  const { title } = useSiteMetadata();
  return (
    <Link to='/'>
      <Image
        src={codefeetLogo}
        alt={title}
        className='logo'
      />
    </Link>
  )
}

export default Logo;
