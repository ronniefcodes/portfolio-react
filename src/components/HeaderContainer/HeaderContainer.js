import styled from 'styled-components';
import media, { availableBreakpoints, } from 'Utils/media';
import { generateCssFromTheme, } from 'Utils/theme';

const themeableProperties = [
  'position',
  'positionBottom',
  'positionLeft',
  'positionRight',
  'positionTop',
  'height',
  'width',
  'margin',
  'padding',
  'textAlign',
  'textTransform',
  'background',
  'transform',
  'transition',
  'zIndex',
];

const HeaderContainer = styled.section`
  ${({ theme, }) => generateCssFromTheme(theme.headerContainer, themeableProperties)};

  ${({ theme, }) =>
    availableBreakpoints.map((breakpoint) =>
      theme.headerContainer[breakpoint] && media.min[breakpoint]`
        ${generateCssFromTheme(theme.headerContainer[breakpoint], themeableProperties)}
      `
    )
  }
`;

export default HeaderContainer;
