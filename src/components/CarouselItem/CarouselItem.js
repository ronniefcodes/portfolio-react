import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';

const StyledCarouselItem = styledComponents.div`
  height: 100%;
  width: 100%;
`;

const CarouselBackground = styledComponents.div`
  height: 100%;
  width: 100%;
  background-image: ${({ backgroundImage, }) => `url(${backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  filter: brightness(120%) contrast(80%) opacity(50%) saturate(75%);
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
      backgroundImage,
      body,
    } = this.props;

    return (
      <StyledCarouselItem>
        {backgroundImage && (<CarouselBackground backgroundImage={backgroundImage} />)}
        {body && (<CarouselContent __dangerouslySetInnerHTML={body} />)}
      </StyledCarouselItem>
    )
  }
}

CarouselItem.propTypes = {
  backgroundImage: PropTypes.string,
  body: PropTypes.string,
};

export default CarouselItem;
