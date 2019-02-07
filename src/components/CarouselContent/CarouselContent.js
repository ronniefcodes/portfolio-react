import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media, { availableBreakpoints, } from 'Utils/media';
import { generateCssFromTheme, } from 'Utils/theme';

import CarouselContentBody from 'Components/CarouselContentBody';
import CarouselContentTitle from 'Components/CarouselContentTitle';
import CarouselContentSubtitle from 'Components/CarouselContentSubtitle';

const themeableProperties = [
  'display',
  'position',
  'positionBottom',
  'positionLeft',
  'positionRight',
  'positionTop',
  'height',
  'width',
  'margin',
  'padding',
  'fontColor',
  'textAlign',
  'backgroundColor',
  'boxShadow',
  'animation',
  'transform',
  'transition',
  'opacity',
  'zIndex',
];

const StyledContainer = styled.div`
  ${({ theme, }) => generateCssFromTheme(theme.carouselContent, themeableProperties)}

  ${({ theme, }) =>
    availableBreakpoints.map((breakpoint) =>
      theme.carouselContent[breakpoint] && media.min[breakpoint]`
        ${generateCssFromTheme(theme.carouselContent[breakpoint], themeableProperties)}
      `
    )
  }

  &:after {
    ${({ theme, }) => generateCssFromTheme(theme.carouselContent.after)};
  }

  ${({ isVisible, theme, }) => isVisible ? `
    animation: ${theme.carouselContent.visibleAnimation || ''};
    animation-name: ${theme.carouselContent.visibleAnimationName || ''};
    animation-duration: ${theme.carouselContent.visibleAnimationDuration || ''};
    animation-timing-function: ${theme.carouselContent.visibleAnimationTimingFunction || ''};
    animation-iteration-count: ${theme.carouselContent.visibleAnimationIterationCount || ''};
    animation-fill-mode: ${theme.carouselContent.visibleAnimationFillMode || ''};
    boxShadow: ${theme.carouselContent.visibleBoxShadow || ''};
    opacity: ${theme.carouselContent.visibleOpacity || ''};
    outline: ${theme.carouselContent.visibleOutline || ''};
  ` : ''}
`;


const CarouselContent = (props) => {
  const {
    title,
    description,
    subtitle,
    isVisible,
  } = props;

  return (
    <StyledContainer isVisible={isVisible}>
      <CarouselContentTitle>{title}</CarouselContentTitle>
      <CarouselContentSubtitle>{subtitle}</CarouselContentSubtitle>
      <CarouselContentBody>{description}</CarouselContentBody>
    </StyledContainer>
  );
}

CarouselContent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  isVisible: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CarouselContent;
