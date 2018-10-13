import React, { Component, } from 'react';
import styledComponents from 'styled-components';
import colours from 'Theme/colours';
import { absolutelyCentred, } from 'Utils/mixins';

const feather = require('feather-icons');

const StyledIcon = styledComponents.span`
  position: relative;
  display: inline-block;
  height: 40px;
  width: 40px;
  padding: 5px;
  border: 2px solid ${colours.blue};
  border-radius: 100%;
  box-sizing: border-box;

  svg {
    ${absolutelyCentred}
  }
`;

class LinkIcon extends Component {
  render() {
    const {
      colour,
      name,
    } = this.props;

    return (
      <StyledIcon
        dangerouslySetInnerHTML={{
          __html: feather.icons[name].toSvg({ color: colour, }),
        }}
      />
    );
  }
};

export default LinkIcon;
