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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
  filter: brightness(120%) contrast(80%) saturate(75%);

  ${media.min.desktop`
    background-image: ${({ backgroundImages, }) => backgroundImages.desktop ? `url(${backgroundImages.desktop})` : null}
    background-size: contain;
    background-position: 0 50%;
    filter: none;
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
  backgroundImage: PropTypes.string,
  body: PropTypes.string,
};

export default CarouselItem;
