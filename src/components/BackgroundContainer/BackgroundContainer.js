import React from 'react';
import styledComponents from 'styled-components';
import media from 'Utils/media';

const BackgroundImageContainer = styledComponents.div`
  background-size: ${({ theme, }) => theme.backgrounds.backgroundSize};
  background-repeat: ${({ theme, }) => theme.backgrounds.backgroundRepeat};
  background-position: ${({ theme, }) => theme.backgrounds.backgroundPosition};

  ${({ theme, }) => theme.backgrounds.smallDesktop && media.min.smallDesktop`
    background-position: ${theme.backgrounds.smallDesktop.backgroundPosition};
  `}
`;

export default BackgroundImageContainer;
