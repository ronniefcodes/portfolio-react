import styledComponents from 'styled-components';
import media, { getAvailableBreakpointNames, } from 'Utils/media';

const Subheader = styledComponents.h3`
  font-family: ${({ theme, }) => theme.subheaders.fontFamily};
  font-size: ${({ theme, }) => theme.subheaders.fontSize};
  font-weight: ${({ theme, }) => theme.subheaders.fontWeight};
  text-transform: ${({ theme, }) => theme.subheaders.h3TextTransform};
  letter-spacing: ${({ theme, }) => theme.subheaders.letterSpacing};
  margin: ${({ theme, }) => theme.subheaders.margin};

  ${({ theme, }) =>
    getAvailableBreakpointNames().map((breakpoint) =>
      theme.subheaders[breakpoint] ? media.min[breakpoint]`
        font-size: ${theme.subheaders[breakpoint].h3FontSize};
      ` : null
    )
  }
`;

export default Subheader;
