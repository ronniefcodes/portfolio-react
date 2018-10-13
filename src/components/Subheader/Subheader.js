import React from 'react';
import styled from 'styled-components';
import media from 'Utils/media';

const Subheader = styled.h3`
  font-family: ${({ theme, }) => theme.headers.fontFamily};
  font-size: ${({ theme, }) => theme.headers.h3.fontSize};
  font-weight: ${({ theme, }) => theme.headers.fontWeight};
  text-transform: ${({ theme, }) => theme.headers.h3.textTransform};
  margin: 0.25em 0;

  ${({ theme, }) => theme.headers.tablet && theme.headers.smallDesktop.h3 && media.min.tablet`
    font-size: ${theme.headers.tablet.h3.fontSize};
  `};

  ${({ theme, }) => theme.headers.smallDesktop && theme.headers.smallDesktop.h3 && media.min.smallDesktop`
    font-size: ${theme.headers.smallDesktop.h3.fontSize};
  `};
`;

export default Subheader;
