import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';
import { getCarouselItemFromProject, } from 'Utils/carousel';

import CarouselItem from 'Components/CarouselItem';
import CarouselNavButton from 'Components/CarouselNavButton';
import Icon from 'Components/Icon';

const CarouselContainer = styledComponents.div`
  position: relative;
  height: ${({ theme, }) => theme.carousel.height};
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
    const { items, } = this.props;

    // reset carousel index if items have changed
    if (items !== prevProps.items) {
      this.setState({
        currentIndex: 0,
      });
    }
  }

  handleCarouselOnClick() {
    const {
      items,
      onCarouselClick,
    } = this.props;
    const { currentIndex, } = this.state;

    // if onClick handler has been provided, call it with the current carousel item
    if (onCarouselClick) this.props.onCarouselClick(items[currentIndex]);
  }

  handleCarouselNext() {
    const { items, } = this.props;
    const { currentIndex, } = this.state;

    // increase current index unless the current index is already the highest (in which case, reset to 0)
    this.setState({
      currentIndex: currentIndex === items.length - 1 ? 0 : currentIndex + 1,
    });
  }

  handleCarouselBack() {
    const { items, } = this.props;
    const { currentIndex, } = this.state;

    // decrease current index unless index is currently 0 (in which case, set to highest)
    this.setState({
      currentIndex: currentIndex === 0 ? items.length - 1 : currentIndex - 1,
    });
  }

  render() {
  const { items, } = this.props;
    const { currentIndex, } = this.state;

    // no element to be rendered if no items are provided
    if (!items || items.length === 0) return null;

    return (
      <CarouselContainer>
        <CarouselNavButton
          action="back"
          type="button"
          onClick={this.onCarouselBackClick}
        >
          <Icon name="chevron-left" height="30" width="30" />
        </CarouselNavButton>
        <CarouselNavButton
          action="next"
          type="button"
          onClick={this.onCarouselNextClick}
        >
          <Icon name="chevron-right" height="30" width="30" />
        </CarouselNavButton>
        <CarouselItem
          onClick={this.handleCarouselOnClick}
          {...getCarouselItemFromProject(items[currentIndex])}
        />
      </CarouselContainer>
    );
  }
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onCarouselClick: PropTypes.func,
};

export default Carousel;
