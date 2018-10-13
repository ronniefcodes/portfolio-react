import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';
import media from 'Utils/media';
import BackgroundContainer from 'Components/BackgroundContainer';

const StyledCarouselItem = styledComponents.div`
  height: 100%;
  width: 100%;
`;

const CarouselBackground = styledComponents(BackgroundContainer)`
  height: ${({ theme, }) => theme.carousel.background.height};
  width: ${({ theme, }) => theme.carousel.background.width};
  background-image: ${({ backgroundImages, }) => `url(${backgroundImages.mobile})`};

  ${media.min.tablet`
    background-image: ${({ backgroundImages, }) => backgroundImages.tablet ? `url(${backgroundImages.tablet})` : null};
  `}${media.min.smallDesktop`
    background-image: ${({ backgroundImages, }) => backgroundImages.smallDesktop ? `url(${backgroundImages.smallDesktop})` : null};
  `}
`;

const CarouselContent = styledComponents.div`
  position: ${({ theme, }) => theme.carousel.content.position};
  bottom: ${({ theme, }) => theme.carousel.content.positionBottom};
  left: ${({ theme, }) => theme.carousel.content.positionLeft};
  right: ${({ theme, }) => theme.carousel.content.positionRight};
  top: ${({ theme, }) => theme.carousel.content.positionTop};
  transform: ${({ theme, }) => theme.carousel.content.translate};
  text-align: ${({ theme, }) => theme.carousel.content.textAlign};
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
