import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'Utils/media';
import { generateCssFromTheme, } from 'Utils/theme';
import Button from 'Components/Button';
import Chevron from 'Components/Chevron';

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

const StyledNavButton = styled(Button)`
  ${({ theme, }) => generateCssFromTheme(theme.carouselNavButtons, themeableProperties)}

  ${({ action, theme, }) => theme.carouselNavButtons[action] && `
    left: ${theme.carouselNavButtons[action].positionLeft || ''};
    right: ${theme.carouselNavButtons[action].positionRight || ''};
  `}

  ${({ action, theme, }) => (theme.carouselNavButtons.smallDesktop && theme.carouselNavButtons.smallDesktop[action]) && media.min.smallDesktop`
    left: ${theme.carouselNavButtons.smallDesktop[action].positionLeft || ''};
    right: ${theme.carouselNavButtons.smallDesktop[action].positionRight || ''};
  `}
`

const CarouselNavButton = (props) => {
  const {
    action,
  } = props;

  return (

    <StyledNavButton {...props}>
      <Chevron direction={action === 'next' ? 'left' : 'right'} />
    </StyledNavButton>
  );
};

CarouselNavButton.propTypes = {
  action: PropTypes.string,
};

export default CarouselNavButton;
