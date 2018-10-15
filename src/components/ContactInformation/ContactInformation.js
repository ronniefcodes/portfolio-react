import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { parseContactMethodUrl, } from 'Utils/url';
import { generateCssFromTheme, } from 'Utils/theme';
import Link from 'Components/Link';

const ContactInformationContainer = styled.div`
  ${({ theme, }) => generateCssFromTheme(theme.contactInformation, [
    'margin',
    'padding',
  ])}

  a {
    display: inline-block;
    line-height: 0;

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
        {contactMethods.map((contactMethod, i) => {
          const url = parseContactMethodUrl(contactMethod);
          return (<Link key={`contactMethod-${i}`} url={url} {...contactMethod} />)
        })}
      </ContactInformationContainer>
    )
  }
}

ContactInformation.defaultProps = {
  contactMethods: [],
};

ContactInformation.propTypes = {
  contactMethods: PropTypes.arrayOf(PropTypes.object),
};

export default ContactInformation;
