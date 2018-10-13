import styledComponents from 'styled-components';
import media from 'Utils/media';
import { verticallyCentred, } from 'Utils/mixins';
import Button from 'Components/Button';

const CarouselNavButton = styledComponents(Button)`
  ${verticallyCentred}
  margin: ${({ theme, }) => theme.carousel.navButtons.margin};
  padding: ${({ theme, }) => theme.carousel.navButtons.padding};
  z-index: ${({ theme, }) => theme.carousel.navButtons.zIndex};

  ${({ action, theme, }) => theme.carousel && theme.carousel.navButtons[action] && `
    left: ${theme.carousel.navButtons[action].positionLeft};
    right: ${theme.carousel.navButtons[action].positionRight};

    ${media.min.smallDesktop`
      ${theme.carousel.smallDesktop && theme.carousel.smallDesktop.navButtons[action] && `
        left: ${theme.carousel.smallDesktop.navButtons[action].positionLeft};
        right: ${theme.carousel.smallDesktop.navButtons[action].positionRight};
      `}
    `}
  `}
`;

export default CarouselNavButton;
