import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';
import { parseContactMethodUrl, } from 'Utils/url';
import Link from 'Components/Link';

const ContactInformationContainer = styledComponents.div`
  margin-top: 1.5em;

  a {
    display: inline-block;

    & + a {
      margin-left: 1.25em;
    }
  }
`;

class ContactInformation extends Component {
  render() {
    const {
      contactMethods,
    } = this.props;

    return (
      <ContactInformationContainer>
        {contactMethods && contactMethods.map((contactMethod, i) => {
          const url = parseContactMethodUrl(contactMethod);
          return (<Link key={`contactMethod-${i}`} url={url} {...contactMethod} />)
        })}
      </ContactInformationContainer>
    )
  };
};

ContactInformation.propTypes = {
  contactMethods: PropTypes.arrayOf(PropTypes.object),
};

export default ContactInformation;
