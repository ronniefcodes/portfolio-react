import styled from 'styled-components';

const Button = styled.button`
  -webkit-appearance: ${({ theme, }) => theme.buttons.webkitAppearance};
  margin: ${({ theme, }) => theme.buttons.margin};
  padding: ${({ theme, }) => theme.buttons.padding};
  border: ${({ theme, }) => theme.buttons.border};
  box-shadow: ${({ theme, }) => theme.buttons.boxShadow};
  background: ${({ theme, }) => theme.buttons.background};
`;

export default Button;
