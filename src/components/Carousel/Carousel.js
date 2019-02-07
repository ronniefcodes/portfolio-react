import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getCarouselItemFromProject, handleCarouselPreload, } from 'Utils/carousel';
import {
  _EVENT_KEYCODES,
  registerEventListener,
} from 'Utils/events';

import CarouselItem from 'Components/CarouselItem';
import CarouselNavButton from 'Components/CarouselNavButton';

const CarouselContainer = styled.div`
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

  componentDidMount() {
    const { items, preload, } = this.props;

    if (preload) {
      handleCarouselPreload(items, 0);
    }

    this.enableKeyboardNavigation();
  }

  componentDidUpdate(prevProps, prevState) {
    const { items, preload, } = this.props;
    const { currentIndex, } = this.state;

    // reset carousel index if items have changed
    if (items !== prevProps.items) {
      this.setState({
        currentIndex: 0,
      });
    }

    // handle preload if required on currentIndex change
    if (preload && currentIndex !== prevState.currentIndex) {
      handleCarouselPreload(items, currentIndex);
    }
  }

  enableKeyboardNavigation() {
    const { items, } = this.props;

    registerEventListener(document, 'keydown', (ev) => {
      if (items.length > 1) {
        switch(ev.keyCode) {
          case _EVENT_KEYCODES.LEFT:
            this.onCarouselBackClick();
            break;
          case _EVENT_KEYCODES.RIGHT:
            this.onCarouselNextClick();
            break;
          default:
            break;
        }
      }
    });
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
    const updatedIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    this.setState({ currentIndex: updatedIndex, });
  }

  handleCarouselBack() {
    const { items, } = this.props;
    const { currentIndex, } = this.state;

    // decrease current index unless index is currently 0 (in which case, set to highest)
    const updatedIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    this.setState({ currentIndex: updatedIndex, });
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
        </CarouselNavButton>
        <CarouselNavButton
          action="next"
          type="button"
          onClick={this.onCarouselNextClick}
        >
        </CarouselNavButton>
        <CarouselItem
          onClick={this.handleCarouselOnClick}
          {...getCarouselItemFromProject(items[currentIndex])}
        />
      </CarouselContainer>
    );
  }
}

Carousel.defaultProps = {
  items: [],
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onCarouselClick: PropTypes.func,
};

export default Carousel;
