import React from 'react';
import { storiesOf, } from '@storybook/react';
import Icon from 'Components/Icon';

storiesOf('Icon', module)
  .add('Undefined Icon', () => <Icon />)
  .add('Icon: Check', () => <Icon name="check" />)
  .add('Icon: Chevron Up', () => <Icon name="chevron-up" />);
