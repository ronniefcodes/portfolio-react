import React from 'react';
import styledComponents from 'styled-components';
import colours from 'Theme/colours';

import LinkIcon from 'Components/LinkIcon';

const StyledLink = styledComponents.a`
  color: ${colours.blue};
`;
const Link = (props) => (
  <StyledLink
    title={props.name}
    href={props.url}
    aria-label={props.ariaLabel}>{
    props.icon ? (<LinkIcon  name={props.icon} />) : props.name
  }</StyledLink>
)

export default Link;
