import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';
import 'Theme/icons';
import media from 'Utils/media';

import CarouselItem from 'Components/CarouselItem';

const CarouselContainer = styledComponents.div`
  position: relative;
  height: 100%;
`;

const CarouselNavButton = styledComponents.button`
  position: absolute;
  margin: .5em;
  top: 50%;
  transform: translateY(-50%);

  &.carousel-nav-button--back {
    left: 0;
  }

  &.carousel-nav-button--next {
    right: 0;
  }

  ${media.min.desktop`
    top: 50%;
  `}
`;

const CarouselItemContainer = styledComponents.div`
  position: static;
`;

const CarouselItemContent = styledComponents.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
          className="carousel-nav-button--back"
          onClick={this.onCarouselBackClick}
        >
          <i className="material-icons">arrow_back_ios</i>
        </CarouselNavButton>
        <CarouselNavButton
          className="carousel-nav-button--next"
          onClick={this.onCarouselNextClick}
        >
          <i className="material-icons">arrow_forward_ios</i>
        </CarouselNavButton>
        {carouselItems.map((carouselItem, i) =>
          i === currentIndex && (
            <CarouselItem>
              <CarouselItemContent>{carouselItem.body}</CarouselItemContent>
            </CarouselItem>
          )
        )}
      </CarouselContainer>
    );
  }
};

Carousel.propTypes = {
  carouselItems: PropTypes.arrayOf(PropTypes.object),
  onCarouselClick: PropTypes.func,
};

export default Carousel;
