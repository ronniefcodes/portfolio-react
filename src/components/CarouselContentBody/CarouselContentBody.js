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

const CarouselContentBody = styled.p`
  ${({ theme, }) => generateCssFromTheme(theme.carouselContentBody, themeableProperties)}

  ${({ theme, }) =>
    availableBreakpoints.map((breakpoint) =>
      theme.carouselContentBody[breakpoint] && media.min[breakpoint]`
        ${generateCssFromTheme(theme.carouselContentBody[breakpoint], themeableProperties)}
      `
    )
  }
`;

export default CarouselContentBody;
