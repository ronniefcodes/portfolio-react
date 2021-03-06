import styled from 'styled-components';
import media, { availableBreakpoints, } from 'Utils/media';
import { generateCssFromTheme, } from 'Utils/theme';

const themeableProperties = [
  'fontColor',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'textDecoration',
  'textTransform',
  'margin',
];

const Header = styled.h1`
  ${({ theme, }) => generateCssFromTheme(theme.headers, themeableProperties)}

  ${({ theme, }) =>
    availableBreakpoints.map((breakpoint) =>
      theme.headers[breakpoint] && media.min[breakpoint]`
        ${generateCssFromTheme(theme.headers[breakpoint], themeableProperties)}
      `
    )
  }
`;

export default Header;
