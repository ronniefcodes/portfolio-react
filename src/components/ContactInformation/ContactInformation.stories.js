import React from 'react';
import { storiesOf, } from '@storybook/react';
import ContactInformation from 'Components/ContactInformation';
import content from '../../../examples/content';

storiesOf('ContactInformation', module)
  .add('Without Items', () => <ContactInformation />)
  .add('With Items', () => <ContactInformation contactMethods={content.contactMethods} />);
