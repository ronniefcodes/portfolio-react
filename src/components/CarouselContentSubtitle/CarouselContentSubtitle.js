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

const CarouselContentSubtitle = styled.h3`
  ${({ theme, }) => generateCssFromTheme(theme.carouselContentSubtitles, themeableProperties)}

  ${({ theme, }) =>
    availableBreakpoints.map((breakpoint) =>
      theme.carouselContentSubtitles[breakpoint] && media.min[breakpoint]`
        ${generateCssFromTheme(theme.carouselContentSubtitles[breakpoint], themeableProperties)}
      `
    )
  }
`;

export default CarouselContentSubtitle;
