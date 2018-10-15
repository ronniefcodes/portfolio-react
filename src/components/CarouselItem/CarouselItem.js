import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media, { availableBreakpoints, } from 'Utils/media';
import BackgroundContainer from 'Components/BackgroundContainer';
import CarouselContent from 'Components/CarouselContent';

const StyledCarouselItem = styled.div`
  height: 100%;
  width: 100%;
`;

const CarouselBackground = styled(BackgroundContainer)`
  height: ${({ theme, }) => theme.carousel.backgroundHeight};
  width: ${({ theme, }) => theme.carousel.backgroundWidth};
  background-image: ${({ backgroundImages, }) => `url(${backgroundImages.mobile})`};

  ${({ backgroundImages, }) =>
    availableBreakpoints.map((breakpoint) =>
      backgroundImages[breakpoint] ? media.min[breakpoint]`
        background-image: url(${backgroundImages[breakpoint]});
      ` : null
    )
  }
`;

class CarouselItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCarouselContent: false,
    };

    this.handleCarouselItemClick = this.toggleCarouselContent.bind(this);
  }

  toggleCarouselContent() {
    const { showCarouselContent, } = this.state;

    this.setState({
      showCarouselContent: !showCarouselContent,
    });
  }

  render() {
    const {
      backgroundImages,
    } = this.props;
    const { showCarouselContent, } = this.state;

    return (
      <StyledCarouselItem onClick={this.handleCarouselItemClick}>
        {backgroundImages && (<CarouselBackground backgroundImages={backgroundImages} />)}
        <CarouselContent
          isVisible={showCarouselContent}
          {...this.props}>
        </CarouselContent>
      </StyledCarouselItem>
    )
  }
}

CarouselItem.propTypes = {
  backgroundImages: PropTypes.object,
};

export default CarouselItem;
