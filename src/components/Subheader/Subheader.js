import styledComponents from 'styled-components';
import media, { getAvailableBreakpointNames, } from 'Utils/media';

const Subheader = styledComponents.h3`
  font-family: ${({ theme, }) => theme.headers.fontFamily};
  font-size: ${({ theme, }) => theme.headers.h3FontSize};
  font-weight: ${({ theme, }) => theme.headers.fontWeight};
  text-transform: ${({ theme, }) => theme.headers.h3TextTransform};
  margin: 0.25em 0;

  ${({ theme, }) =>
    getAvailableBreakpointNames().map((breakpoint) =>
      theme.headers[breakpoint] ? media.min[breakpoint]`
        font-size: ${theme.headers[breakpoint].h3FontSize};
      ` : null
    )
  }
`;

export default Subheader;
