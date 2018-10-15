import styled from 'styled-components';
import media from 'Utils/media';
import Button from 'Components/Button';

const CarouselNavButton = styled(Button)`
  cursor: pointer;
  position: ${({ theme, }) => theme.carouselNavButtons.position};
  top: ${({ theme, }) => theme.carouselNavButtons.positionTop};
  transform: ${({ theme, }) => theme.carouselNavButtons.transform};
  margin: ${({ theme, }) => theme.carouselNavButtons.margin};
  padding: ${({ theme, }) => theme.carouselNavButtons.padding};
  z-index: ${({ theme, }) => theme.carouselNavButtons.zIndex};

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
