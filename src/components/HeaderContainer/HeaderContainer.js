import styled from 'styled-components';
import media, { availableBreakpoints, } from 'Utils/media';

const HeaderContainer = styled.section`
  width: ${({ theme, }) => theme.headerContainer.width};
  position: ${({ theme, }) => theme.headerContainer.position};
  bottom: ${({ theme, }) => theme.headerContainer.positionBottom};
  left: ${({ theme, }) => theme.headerContainer.positionLeft};
  right: ${({ theme, }) => theme.headerContainer.positionRight};
  top: ${({ theme, }) => theme.headerContainer.positionTop};
  padding: ${({ theme, }) => theme.headerContainer.padding};
  transform: ${({ theme, }) => theme.headerContainer.transform};
  background: ${({ theme, }) => theme.headerContainer.background};
  transition: ${({ theme, }) => theme.headerContainer.transition};
  z-index: ${({ theme, }) => theme.headerContainer.zIndex};
  text-align:  ${({ theme, }) => theme.headerContainer.textAlign};

  ${({ theme, }) =>
    availableBreakpoints.map((breakpoint) =>
      theme.headerContainer[breakpoint] ? media.min[breakpoint]`
        height: ${theme.headerContainer[breakpoint].height};
        width: ${theme.headerContainer[breakpoint].width};
        position: ${theme.headerContainer[breakpoint].position};
        bottom: ${theme.headerContainer[breakpoint].positionBottom};
        left: ${theme.headerContainer[breakpoint].positionLeft};
        right: ${theme.headerContainer[breakpoint].positionRight};
        top: ${theme.headerContainer[breakpoint].positionTop};
        margin: ${theme.headerContainer[breakpoint].margin};
        padding: ${theme.headerContainer[breakpoint].padding};
        transform: ${({ theme, }) => theme.headerContainer[breakpoint].transform};
        background: ${theme.headerContainer[breakpoint].background};
        text-align:  ${theme.headerContainer[breakpoint].textAlign};
      ` : null
    )
  }
`;

export default HeaderContainer;
