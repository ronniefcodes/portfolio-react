import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media, { availableBreakpoints, } from 'Utils/media';
import { generateCssFromTheme, } from 'Utils/theme';

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

  ${({ theme, }) => theme.carouselContent.after ? generateCssFromTheme(theme.carouselContent.after) : ''}

  ${({ isVisible, theme, }) => isVisible ? `
    animation: ${theme.carouselContent.visibleAnimation || ''};
    animation-name: ${theme.carouselContent.visibleAnimationName || ''};
    animation-duration: ${theme.carouselContent.visibleAnimationDuration || ''};
    animation-timing-function: ${theme.carouselContent.visibleAnimationTimingFunction || ''};
    animation-iteration-count: ${theme.carouselContent.visibleAnimationIterationCount || ''};
    boxShadow: ${theme.carouselContent.visibleBoxShadow || ''};
    opacity: ${theme.carouselContent.visibleOpacity || ''};
    outline: ${theme.carouselContent.visibleOutline || ''};
  ` : ''}
`;


const Link = (props) => {
  const {
    title,
    description,
    subtitle,
    isVisible,
  } = props;

  return (
    <StyledContainer isVisible={isVisible}>
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      <p>{description}</p>
    </StyledContainer>
  );
}

Link.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  isVisible: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Link;
