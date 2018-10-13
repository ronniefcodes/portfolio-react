import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';
import media from 'Utils/media';

const StyledCarouselItem = styledComponents.div`
  height: 100%;
  width: 100%;
`;

const CarouselBackground = styledComponents.div`
  height: 100%;
  width: 100%;
  background-image: ${({ backgroundImages, }) => `url(${backgroundImages.mobile})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 0;

  ${media.min.tablet`
    background-image: ${({ backgroundImages, }) => backgroundImages.tablet ? `url(${backgroundImages.tablet})` : null};
    background-size: cover;
    background-position: 0 50%;
  `}${media.min.desktop`
    background-image: ${({ backgroundImages, }) => backgroundImages.desktop ? `url(${backgroundImages.desktop})` : null};
  `}
`;

const CarouselContent = styledComponents.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
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
