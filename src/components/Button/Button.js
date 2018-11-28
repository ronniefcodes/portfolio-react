import styled from 'styled-components';
import { generateCssFromTheme, } from 'Utils/theme';

const Button = styled.button`
  -webkit-appearance: none;
  box-sizing: border-box;
  ${({ theme, }) => generateCssFromTheme(theme.buttons, [
      'height',
      'width',
      'margin',
      'padding',
      'fontColor',
      'fontFamily',
      'background',
      'boxShadow',
      'border',
      'borderRadius',
      'boxSizing',
      'transition',
    ])}

  ${({ theme, }) => theme.buttons.onActive &&
    `&:active, &:focus, &:hover {
      border: ${theme.buttons.onActive.border};
      color: ${theme.buttons.onActive.fontColor};
    }`
  }
`;

export default Button;
