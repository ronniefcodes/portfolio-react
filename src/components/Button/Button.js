import styled from 'styled-components';

const Button = styled.button`
  -webkit-appearance: none;
  box-sizing: border-box;
  color: ${({ theme, }) => theme.buttons.fontColor};
  height: ${({ theme, }) => theme.buttons.height};
  width: ${({ theme, }) => theme.buttons.width};
  margin: ${({ theme, }) => theme.buttons.margin};
  padding: ${({ theme, }) => theme.buttons.padding};
  box-shadow: ${({ theme, }) => theme.buttons.boxShadow};
  border: ${({ theme, }) => theme.buttons.border};
  border-radius: ${({ theme, }) => theme.buttons.borderRadius};
  background: ${({ theme, }) => theme.buttons.background};
  transition: ${({ theme, }) => theme.buttons.transition};

  ${({ theme, }) => theme.buttons.onActive &&
    `&:active, &:focus, &:hover {
      border: ${theme.buttons.onActive.border};
      color: ${theme.buttons.onActive.fontColor};
    }`
  }
`;

export default Button;
