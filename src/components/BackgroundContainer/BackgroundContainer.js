import React from 'react';
import styledComponents from 'styled-components';
import media from 'Utils/media';
import colours from 'Theme/colours';

const BackgroundImageContainer = styledComponents.div`
  background-color: ${colours.brown};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;

  ${media.min.tablet`
    background-position: 0 50%;
  `}
`;

export default BackgroundImageContainer;
