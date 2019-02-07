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

const CarouselContentTitle = styled.h2`
  ${({ theme, }) => generateCssFromTheme(theme.carouselContentTitles, themeableProperties)}

  ${({ theme, }) =>
    availableBreakpoints.map((breakpoint) =>
      theme.carouselContentTitles[breakpoint] && media.min[breakpoint]`
        ${generateCssFromTheme(theme.carouselContentTitles[breakpoint], themeableProperties)}
      `
    )
  }
`;

export default CarouselContentTitle;
