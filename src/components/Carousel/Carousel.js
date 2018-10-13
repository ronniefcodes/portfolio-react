import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';
import media from 'Utils/media';
import vLayers from 'Utils/vLayers';

import Button from 'Components/Button';
import CarouselItem from 'Components/CarouselItem';
import Icon from 'Components/Icon';

const CarouselContainer = styledComponents.div`
  position: relative;
  height: 100%;
`;

const CarouselNavButton = styledComponents(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: .5em;
  padding: .5em;
  z-index: ${vLayers.top};

  &.carousel-nav-button--back {
    left: 0;
  }

  &.carousel-nav-button--next {
    right: 0;
  }

  ${media.min.tablet`
    &.carousel-nav-button--back {
      left: 2%;
    }

    &.carousel-nav-button--next {
      right: 2%;
    }
  `}
`;

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };

    this.onCarouselBackClick = this.handleCarouselBack.bind(this);
    this.onCarouselNextClick = this.handleCarouselNext.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { carouselItems, } = this.props;

    // reset carousel index if items have changed
    if (carouselItems !== prevProps.carouselItems) {
      this.state = {
        currentIndex: 0,
      };
    }
  }

  handleCarouselOnClick() {
    const {
      carouselItems,
      onCarouselClick,
    } = this.props;
    const { currentIndex, } = this.state;

    // if onClick handler has been provided, call it with the current carousel item
    if (onCarouselClick) this.props.onCarouselClick(carouselItems[currentIndex]);
  }

  handleCarouselNext() {
    const { carouselItems, } = this.props;
    const { currentIndex, } = this.state;

    // increase current index unless the current index is already the highest (in which case, reset to 0)
    this.setState({
      currentIndex: currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1,
    });
  }

  handleCarouselBack() {
    const { carouselItems, } = this.props;
    const { currentIndex, } = this.state;

    // decrease current index unless index is currently 0 (in which case, set to highest)
    this.setState({
      currentIndex: currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1,
    });
  }

  render() {
  const { carouselItems, } = this.props;
    const { currentIndex, } = this.state;

    // no element to be rendered if no items are provided
    if (!carouselItems || carouselItems.length === 0) return null;

    return (
      <CarouselContainer>
        <CarouselNavButton
          type="button"
          className="carousel-nav-button--back"
          onClick={this.onCarouselBackClick}
        >
          <Icon name="chevron-left" height="30" width="30" />
        </CarouselNavButton>
        <CarouselNavButton
          type="button"
          className="carousel-nav-button--next"
          onClick={this.onCarouselNextClick}
        >
          <Icon name="chevron-right" height="30" width="30" />
        </CarouselNavButton>
        <CarouselItem
          onClick={this.handleCarouselOnClick}
          {...carouselItems[currentIndex]}
        />
      </CarouselContainer>
    );
  }
};

Carousel.propTypes = {
  carouselItems: PropTypes.arrayOf(PropTypes.object),
  onCarouselClick: PropTypes.func,
};

export default Carousel;
