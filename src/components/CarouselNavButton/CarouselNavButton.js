import styledComponents from 'styled-components';
import media from 'Utils/media';
import Button from 'Components/Button';

const CarouselNavButton = styledComponents(Button)`
  position: ${({ theme, }) => theme.carousel.navButtonsPosition};
  top: ${({ theme, }) => theme.carousel.navButtonsPositionTop};
  transform: ${({ theme, }) => theme.carousel.navButtonsTransform};
  margin: ${({ theme, }) => theme.carousel.navButtonsMargin};
  padding: ${({ theme, }) => theme.carousel.navButtonsPadding};
  z-index: ${({ theme, }) => theme.carousel.navButtonsZIndex};

  ${({ action, theme, }) => `
    ${theme.carousel.navButtons && theme.carousel.navButtons[action] && `
      left: ${theme.carousel.navButtons[action].positionLeft};
      right: ${theme.carousel.navButtons[action].positionRight};
    `}

    ${theme.carousel.smallDesktop && theme.carousel.smallDesktop.navButtons[action] && media.min.smallDesktop`
      left: ${theme.carousel.smallDesktop.navButtons[action].positionLeft};
      right: ${theme.carousel.smallDesktop.navButtons[action].positionRight};
    `}
  `}
`;

export default CarouselNavButton;
