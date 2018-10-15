import styled from 'styled-components';
import media, { availableBreakpoints, } from 'Utils/media';

const Subheader = styled.h3`
  font-family: ${({ theme, }) => theme.subheaders.fontFamily};
  font-size: ${({ theme, }) => theme.subheaders.fontSize};
  font-weight: ${({ theme, }) => theme.subheaders.fontWeight};
  text-transform: ${({ theme, }) => theme.subheaders.h3TextTransform};
  letter-spacing: ${({ theme, }) => theme.subheaders.letterSpacing};
  margin: ${({ theme, }) => theme.subheaders.margin};

  ${({ theme, }) =>
    availableBreakpoints.map((breakpoint) =>
      theme.subheaders[breakpoint] ? media.min[breakpoint]`
        font-size: ${theme.subheaders[breakpoint].h3FontSize};
      ` : null
    )
  }
`;

export default Subheader;
