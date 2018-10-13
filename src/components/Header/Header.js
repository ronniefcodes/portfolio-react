import React from 'react';
import styledComponents from 'styled-components';
import media from 'Utils/media';

const Header = styledComponents.h1`
  font-family: ${({ theme, }) => theme.headers.fontFamily};
  font-size: ${({ theme, }) => theme.headers.h1.fontSize};
  font-weight: ${({ theme, }) => theme.headers.fontWeight};
  text-transform: ${({ theme, }) => theme.headers.h1.textTransform};
  margin: 0.25em 0;

  ${({ theme, }) => theme.headers.mobile && theme.headers.mobile.h1 && media.min.mobile`
    font-size: ${theme.headers.mobile.h1.fontSize};
  `};

  ${({ theme, }) => theme.headers.tablet && theme.headers.tablet.h1 && media.min.tablet`
    font-size: ${theme.headers.tablet.h1.fontSize};
  `};

  ${({ theme, }) => theme.headers.smallDesktop && theme.headers.smallDesktop.h1 && media.min.smallDesktop`
    font-size: ${theme.headers.smallDesktop.h1.fontSize};
  `};
`;

export default Header;
