import React from 'react';
import { storiesOf, } from '@storybook/react';
import CarouselContent from 'Components/CarouselContent';
import { getCarouselItemFromProject, } from 'Utils/carousel';
import content from '../../../examples/content';

const carouselItem = content.projects ? getCarouselItemFromProject(content.projects[0]) : {};

storiesOf('Carousel', module)
  .add('Carousel Content Item', () => <CarouselContent {...carouselItem} />);
