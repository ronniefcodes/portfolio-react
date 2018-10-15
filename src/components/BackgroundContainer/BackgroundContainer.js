import styled from 'styled-components';
import media from 'Utils/media';
import { generateCssFromTheme, } from 'Utils/theme';

const BackgroundImageContainer = styled.div`
  ${({ theme, }) => generateCssFromTheme(theme.backgrounds, [
    'backgroundPosition',
    'backgroundRepeat',
    'backgroundSize',
    'filter',
    'transition',
  ])}

  ${({ theme, }) => theme.backgrounds.smallDesktop && media.min.smallDesktop`
    background-position: ${theme.backgrounds.smallDesktop.backgroundPosition};
  `}
`;

export default BackgroundImageContainer;
