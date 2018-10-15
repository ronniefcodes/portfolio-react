import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { absolutelyCentred, } from 'Utils/mixins';

const feather = require('feather-icons');

const StyledIcon = styled.span`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: ${({ theme, }) => theme.links.iconHeight};
  width: ${({ theme, }) => theme.links.iconWidth};
  padding: ${({ theme, }) => theme.links.iconPadding};
  background: ${({ theme, }) => theme.links.iconBackground};
  border: ${({ theme, }) => theme.links.iconBorder};
  border-radius: ${({ theme, }) => theme.links.iconBorderRadius};
  transition: ${({ theme, }) => theme.links.iconTransition};

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
          __html: feather.icons[name] ? feather.icons[name].toSvg(others) : name,
        }}
      />
    );
  }
}

LinkIcon.propTypes = {
  name: PropTypes.string,
}

export default LinkIcon;
