import styled from 'styled-components';
import media, { availableBreakpoints, } from 'Utils/media';
import { generateCssFromTheme, } from 'Utils/theme';

const themeableProperties = [
  'fontColor',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'letterSpacing',
  'textDecoration',
  'textTransform',
  'margin',
];

const CarouselContentHeader = styled.h2`
  ${({ theme, }) => generateCssFromTheme(theme.headers, themeableProperties)}

  ${({ theme, }) =>
    availableBreakpoints.map((breakpoint) =>
      theme.headers[breakpoint] && media.min[breakpoint]`
        ${generateCssFromTheme(theme.headers[breakpoint], themeableProperties)}
      `
    )
  }
`;

export default CarouselContentHeader;
