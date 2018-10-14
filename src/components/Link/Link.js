import React from 'react';
import styledComponents from 'styled-components';

import LinkIcon from 'Components/LinkIcon';

const StyledLink = styledComponents.a`
  color: ${({ theme, }) => theme.links.fontColor};

  ${({ theme, }) => theme.links.onActive &&
    `&:active, &:focus, &:hover {
      color: ${theme.links.onActive.fontColor};

      & > * {
        background-color: ${theme.links.onActive.iconBackgroundColor};
        border-color: ${theme.links.onActive.iconBorderColor};
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
    props.icon ? (<LinkIcon name={props.icon} />) : props.name
  }</StyledLink>
)

export default Link;
