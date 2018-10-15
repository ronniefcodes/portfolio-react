import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { generateCssFromTheme, } from 'Utils/theme';

import LinkIcon from 'Components/LinkIcon';

const themeableProperties = [
  'display',
  'fontColor',
  'fontFamily',
  'fontWeight',
  'textAlign',
  'textTransform',
  'textDecoration',
  'margin',
  'padding',
];

const StyledLink = styled.a`
  ${({ theme, }) => generateCssFromTheme(theme.links, themeableProperties)};

  ${({ theme, }) => `
    &:active, &:focus, &:hover {
      color: ${theme.links.activeFontColor};

      & > * {
        background-color: ${theme.links.activeIconBackgroundColor};
        border-color: ${theme.links.activeIconBorderColor};
      }
    };`
  };
`;

const Link = (props) => (
  <StyledLink
    title={props.title}
    href={props.url}
    target="_blank"
    rel="noopener"
    aria-label={props.ariaLabel}>{
    props.icon ? (<LinkIcon name={props.icon} />) : props.title
  }</StyledLink>
)

Link.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  ariaLabel: PropTypes.string,
  icon: PropTypes.string,
};

export default Link;
