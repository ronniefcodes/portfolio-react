import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';
import media, { getAvailableBreakpointNames, } from 'Utils/media';
import BackgroundContainer from 'Components/BackgroundContainer';

const StyledCarouselItem = styledComponents.div`
  height: 100%;
  width: 100%;
`;

const CarouselBackground = styledComponents(BackgroundContainer)`
  height: ${({ theme, }) => theme.carousel.backgroundHeight};
  width: ${({ theme, }) => theme.carousel.backgroundWidth};
  background-image: ${({ backgroundImages, }) => `url(${backgroundImages.mobile})`};

  ${({ backgroundImages, }) =>
    getAvailableBreakpointNames().map((breakpoint) =>
      backgroundImages[breakpoint] ? media.min[breakpoint]`
        background-image: url(${backgroundImages[breakpoint]});
      ` : null
    )
  }
`;

const CarouselContent = styledComponents.div`
  position: ${({ theme, }) => theme.carouselContent.position};
  bottom: ${({ theme, }) => theme.carouselContent.positionBottom};
  left: ${({ theme, }) => theme.carouselContent.positionLeft};
  right: ${({ theme, }) => theme.carouselContent.positionRight};
  top: ${({ theme, }) => theme.carouselContent.positionTop};
  transform: ${({ theme, }) => theme.carouselContent.translate};
  text-align: ${({ theme, }) => theme.carouselContent.textAlign};
`;

class CarouselItem extends Component {
  render() {
    const {
      backgroundImages,
      body,
    } = this.props;

    return (
      <StyledCarouselItem>
        {backgroundImages && (<CarouselBackground backgroundImages={backgroundImages} />)}
        {body && (<CarouselContent dangerouslySetInnerHTML={{ __html: body, }} />)}
      </StyledCarouselItem>
    )
  }
}

CarouselItem.propTypes = {
  backgroundImages: PropTypes.object,
  body: PropTypes.string,
};

export default CarouselItem;
