import React from 'react';
import { storiesOf, } from '@storybook/react';
import LinkIcon from 'Components/LinkIcon';

storiesOf('Link Icon', module)
  .add('Undefined Icon', () => <LinkIcon />)
  .add('Icon: Check', () => <LinkIcon name="check" />)
  .add('Icon: Chevron Up', () => <LinkIcon name="chevron-up" />);
