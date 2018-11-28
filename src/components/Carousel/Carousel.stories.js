import React from 'react';
import { storiesOf, } from '@storybook/react';
import Carousel from 'Components/Carousel';
import content from '../../../examples/content';

storiesOf('Carousel', module)
  .add('Without Items', () => <Carousel />)
  .add('With Items', () => <Carousel items={content.projects} />);
