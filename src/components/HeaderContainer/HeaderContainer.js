import styledComponents from 'styled-components';
import media, { getAvailableBreakpointNames, } from 'Utils/media';

const HeaderContainer = styledComponents.div`
  width: ${({ theme, }) => theme.headerContainer.width};
  position: ${({ theme, }) => theme.headerContainer.position};
  bottom: ${({ theme, }) => theme.headerContainer.positionBottom};
  left: ${({ theme, }) => theme.headerContainer.positionLeft};
  right: ${({ theme, }) => theme.headerContainer.positionRight};
  top: ${({ theme, }) => theme.headerContainer.positionTop};
  padding: ${({ theme, }) => theme.headerContainer.padding};
  background: ${({ theme, }) => theme.headerContainer.background};
  transition: ${({ theme, }) => theme.headerContainer.transition};
  z-index: ${({ theme, }) => theme.headerContainer.zIndex};
  text-align:  ${({ theme, }) => theme.headerContainer.textAlign};

  ${({ theme, }) =>
    getAvailableBreakpointNames().map((breakpoint) =>
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
        background: ${theme.headerContainer[breakpoint].background};
        text-align:  ${theme.headerContainer[breakpoint].textAlign};
      ` : null
    )
  }
`;

export default HeaderContainer;
