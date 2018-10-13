import React, { Component, } from 'react';
import styledComponents from 'styled-components';
import { absolutelyCentred, } from 'Utils/mixins';

const feather = require('feather-icons');

const StyledIcon = styledComponents.span`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: ${({ theme, }) => theme.links.icon.height};
  width: ${({ theme, }) => theme.links.icon.width};
  padding: ${({ theme, }) => theme.links.icon.padding};
  background: ${({ theme, }) => theme.links.icon.background};
  border: ${({ theme, }) => theme.links.icon.border};
  border-radius: ${({ theme, }) => theme.links.icon.borderRadius};
  transition: ${({ theme, }) => theme.links.icon.transition};

  ${({ theme, }) => theme.links.onActive &&
    `&:active, &:focus, &:hover {
      background-color: ${theme.links.onActive.icon.backgroundColor};
      border-color: ${theme.links.onActive.icon.borderColor};
    };`
  };

  svg {
    ${absolutelyCentred}
  }
`;

class LinkIcon extends Component {
  render() {
    const {
      name,
      ...others
    } = this.props;

    return (
      <StyledIcon
        dangerouslySetInnerHTML={{
          __html: !!feather.icons[name] ? feather.icons[name].toSvg(others) : name,
        }}
      />
    );
  }
};

export default LinkIcon;
