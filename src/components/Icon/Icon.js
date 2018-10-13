import React, { Component, } from 'react';
import styledComponents from 'styled-components';

const feather = require('feather-icons');

const IconContainer = styledComponents.span`
  display: inline-block;
`;

class Icon extends Component {
  render() {
    const {
      name,
      ...others
    } = this.props;

    return (
      <IconContainer
        dangerouslySetInnerHTML={{
          __html: !!feather.icons[name] ? feather.icons[name].toSvg(others) : name,
        }}
      />
    );
  }
};

export default Icon;
