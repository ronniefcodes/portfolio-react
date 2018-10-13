import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';
import media, { getAvailableBreakpointNames, } from 'Utils/media';

import BackgroundContainer from 'Components/BackgroundContainer';
import Carousel from 'Components/Carousel';
import ContactInformation from 'Components/ContactInformation';
import Header from 'Components/Header';
import HeaderContainer from 'Components/HeaderContainer';
import Subheader from 'Components/Subheader';

const AppContainer = styledComponents(BackgroundContainer)`
  position: relative;
  display: block;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
  font-family: ${({ theme, }) => theme.app.fontFamily};
  color: ${({ theme, }) => theme.app.fontColor};
  background-color: ${({ theme, }) => theme.app.backgroundColor};
  background-image: ${({ theme, }) => `url(${theme.app.backgroundImageUrl})`};

  ${({ theme, }) =>
    getAvailableBreakpointNames().map((breakpoint) =>
      theme.app[breakpoint] ? media.min[breakpoint]`
        background-image: url(${theme.app[breakpoint].backgroundImageUrl});
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
  };
};

App.propTypes = {
  contactMethods: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  projects: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default App;
