import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';
import media from 'Utils/media';
import { parseContactMethodUrl, } from 'Utils/url';
import colours from 'Theme/colours';
import Link from 'Components/Link';

const ContactInformationContainer = styledComponents.div`
  margin-top: 1.5em;

  ${Link} + ${Link} {
    margin-left: 0.75em;
  }

  ${media.min.tablet`
    ${Link} + ${Link} {
      margin-left: 1.75em;
    }
  `}
`;

class ContactInformation extends Component {
  render() {
    const {
      contactMethods,
    } = this.props;

    return (
      <ContactInformationContainer>
        {contactMethods && contactMethods.map((contactMethod, i) => (
          <Link
            key={`contactMethod-${i}`}
            href={parseContactMethodUrl(contactMethod)}
            aria-label={contactMethod.ariaLabel}>{contactMethod.name}</Link>
        ))}
      </ContactInformationContainer>
    )
  };
};

ContactInformation.propTypes = {
  contactMethods: PropTypes.arrayOf(PropTypes.object),
};

export default ContactInformation;
