import styledComponents from 'styled-components';
import media from 'Utils/media';

const HeaderContainer = styledComponents.div`
  width: ${({ theme, }) => theme.headerContainer.width};
  position: ${({ theme, }) => theme.headerContainer.position};
  bottom: ${({ theme, }) => theme.headerContainer.positionBottom};
  left: ${({ theme, }) => theme.headerContainer.positionLeft};
  right: ${({ theme, }) => theme.headerContainer.positionRight};
  top: ${({ theme, }) => theme.headerContainer.positionTop};
  padding: ${({ theme, }) => theme.headerContainer.padding};
  background: ${({ theme, }) => theme.headerContainer.background};
  z-index: ${({ theme, }) => theme.headerContainer.zIndex};
  text-align:  ${({ theme, }) => theme.headerContainer.textAlign};

  ${({ theme, }) => theme.headerContainer.smallDesktop && media.min.smallDesktop`
    height: ${theme.headerContainer.smallDesktop.height};
    width: ${theme.headerContainer.smallDesktop.width};
    position: ${theme.headerContainer.smallDesktop.position};
    bottom: ${theme.headerContainer.smallDesktop.positionBottom};
    left: ${theme.headerContainer.smallDesktop.positionLeft};
    right: ${theme.headerContainer.smallDesktop.positionRight};
    top: ${theme.headerContainer.smallDesktop.positionTop};
    margin: ${theme.headerContainer.smallDesktop.margin};
    padding: ${theme.headerContainer.smallDesktop.padding};
    background: ${theme.headerContainer.smallDesktop.background};
    text-align:  ${theme.headerContainer.smallDesktop.textAlign};
  `}

  ${({ theme, }) => theme.headerContainer.desktop && media.min.desktop`
    height: ${theme.headerContainer.desktop.height};
    width: ${theme.headerContainer.desktop.width};
    margin: ${theme.headerContainer.desktop.margin};
    padding: ${theme.headerContainer.desktop.padding};
    background: ${theme.headerContainer.desktop.background};
  `}
`;

export default HeaderContainer;
