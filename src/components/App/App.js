import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media, { availableBreakpoints, } from 'Utils/media';

import BackgroundContainer from 'Components/BackgroundContainer';
import Carousel from 'Components/Carousel';
import ContactInformation from 'Components/ContactInformation';
import Header from 'Components/Header';
import HeaderContainer from 'Components/HeaderContainer';
import Subheader from 'Components/Subheader';

const AppContainer = styled.main`
  position: relative;
  display: block;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
  font-family: ${({ theme, }) => theme.app.fontFamily};
  color: ${({ theme, }) => theme.app.fontColor};
`;

const AppBackground = styled(BackgroundContainer)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme, }) => theme.app.backgroundColor};
  background-image: ${({ theme, }) => theme.app.backgroundImageUrl ? `url('${theme.app.backgroundImageUrl}')` : ''};

  ${({ theme, }) =>
    availableBreakpoints.map(breakpoint =>
      theme.app[breakpoint] ? media.min[breakpoint]`
        background-image: ${theme.app.backgroundImageUrl ? `url('${theme.app.backgroundImageUrl}')` : ''};
      ` : null
    )
  }
`;

class App extends Component {
  render() {
    const {
      contactMethods,
      name,
      projects,
      title,
    } = this.props;

    return (
      <AppContainer>
        <AppBackground />
        <HeaderContainer>
          <Header>{name}</Header>
          {title && (
            <Subheader>{title}</Subheader>
          )}
          <ContactInformation contactMethods={contactMethods}/>
        </HeaderContainer>
        <Carousel items={projects} />
      </AppContainer>
    );
  }
}

App.propTypes = {
  contactMethods: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  projects: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default App;
