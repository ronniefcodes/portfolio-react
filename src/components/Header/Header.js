import styledComponents from 'styled-components';
import media, { getAvailableBreakpointNames, } from 'Utils/media';

const Header = styledComponents.h1`
  font-family: ${({ theme, }) => theme.headers.fontFamily};
  font-size: ${({ theme, }) => theme.headers.h1FontSize};
  font-weight: ${({ theme, }) => theme.headers.fontWeight};
  text-transform: ${({ theme, }) => theme.headers.h1TextTransform};
  margin: 0.25em 0;

  ${({ theme, }) =>
    getAvailableBreakpointNames().map((breakpoint) =>
      theme.headers[breakpoint] ? media.min[breakpoint]`
        font-size: ${theme.headers[breakpoint].h1FontSize};
      ` : null
    )
  }
`;

export default Header;
