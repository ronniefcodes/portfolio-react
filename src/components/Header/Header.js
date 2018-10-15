import styled from 'styled-components';
import media, { availableBreakpoints, } from 'Utils/media';

const Header = styled.h1`
  font-family: ${({ theme, }) => theme.headers.fontFamily};
  font-size: ${({ theme, }) => theme.headers.fontSize};
  font-weight: ${({ theme, }) => theme.headers.fontWeight};
  text-transform: ${({ theme, }) => theme.headers.textTransform};
  letter-spacing: ${({ theme, }) => theme.headers.letterSpacing};
  margin: ${({ theme, }) => theme.headers.margin};

  ${({ theme, }) =>
    availableBreakpoints.map((breakpoint) =>
      theme.headers[breakpoint] ? media.min[breakpoint]`
        font-size: ${theme.headers[breakpoint].h1FontSize};
      ` : null
    )
  }
`;

export default Header;
