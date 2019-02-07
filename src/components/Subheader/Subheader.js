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

const Subheader = styled.h3`
  ${({ theme, }) => generateCssFromTheme(theme.subheaders, themeableProperties)}

  ${({ theme, }) =>
    availableBreakpoints.map((breakpoint) =>
      theme.subheaders[breakpoint] && media.min[breakpoint]`
        ${generateCssFromTheme(theme.subheaders[breakpoint], themeableProperties)}
      `
    )
  }
`;

export default Subheader;
