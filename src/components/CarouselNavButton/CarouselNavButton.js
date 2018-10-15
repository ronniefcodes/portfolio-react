import styled from 'styled-components';
import media from 'Utils/media';
import { generateCssFromTheme, } from 'Utils/theme';
import Button from 'Components/Button';

const themeableProperties = [
  'position',
  'positionBottom',
  'positionTop',
  'margin',
  'padding',
  'fontColor',
  'transform',
  'zIndex',
];

const CarouselNavButton = styled(Button)`
  ${({ theme, }) => generateCssFromTheme(theme.carouselNavButtons, themeableProperties)}
  cursor: pointer;

  ${({ action, theme, }) => theme.carouselNavButtons[action] && `
    left: ${theme.carouselNavButtons[action].positionLeft || ''};
    right: ${theme.carouselNavButtons[action].positionRight || ''};
  `}

  ${({ action, theme, }) => (theme.carouselNavButtons.smallDesktop && theme.carouselNavButtons.smallDesktop[action]) && media.min.smallDesktop`
    left: ${theme.carouselNavButtons.smallDesktop[action].positionLeft || ''};
    right: ${theme.carouselNavButtons.smallDesktop[action].positionRight || ''};
  `}
`;

export default CarouselNavButton;
