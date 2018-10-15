import styled from 'styled-components';
import media from 'Utils/media';

const BackgroundImageContainer = styled.div`
  background-size: ${({ theme, }) => theme.backgrounds.backgroundSize};
  background-repeat: ${({ theme, }) => theme.backgrounds.backgroundRepeat};
  background-position: ${({ theme, }) => theme.backgrounds.backgroundPosition};
  filter: ${({ theme, }) => theme.backgrounds.filter};
  transition: ${({ theme, }) => theme.backgrounds.transition};

  ${({ theme, }) => theme.backgrounds.smallDesktop && media.min.smallDesktop`
    background-position: ${theme.backgrounds.smallDesktop.backgroundPosition};
  `}
`;

export default BackgroundImageContainer;
