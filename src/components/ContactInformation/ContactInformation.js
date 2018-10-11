import React, { Component, } from 'react';
import styledComponents from 'styled-components';
import colours from 'Theme/colours';
import Link from 'Components/Link';

const ContactInformationContainer = styledComponents.div`
  margin-top: 1.5em;

  ${Link} + ${Link} {
    margin-left: 1.75em;
  }
`;

class ContactInformation extends Component {
  render() {
    return (
      <ContactInformationContainer>
        <Link href="#">Link 1</Link>
        <Link href="#">Link 2</Link>
        <Link href="#">Link 3</Link>
        <Link href="#">Link 4</Link>
      </ContactInformationContainer>
    )
  };
};

export default ContactInformation;
