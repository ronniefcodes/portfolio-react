import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';
import colours from 'Theme/colours';
import media from 'Utils/media';
import vLayers from 'Utils/vLayers';

import BackgroundContainer from 'Components/BackgroundContainer';
import Carousel from 'Components/Carousel';
import ContactInformation from 'Components/ContactInformation';
import Header from 'Components/Header';
import Subheader from 'Components/Subheader';

const AppContainer = styledComponents(BackgroundContainer)`
  position: relative;
  display: block;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
  color: ${colours.black};
  background: ${({ backgroundImages, }) => `url(${backgroundImages.mobile})`};

  ${media.min.tablet`
    background-image: ${({ backgroundImages, }) => backgroundImages.tablet ? `url(${backgroundImages.tablet})` : null};
  `}${media.min.desktop`
    background-image: ${({ backgroundImages, }) => backgroundImages.desktop ? `url(${backgroundImages.desktop})` : null};
  `}
`;

const HeaderContainer = styledComponents.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0.5em 0 2.5em;
  z-index: ${vLayers.middle};
  text-align: center;

  ${media.min.tablet`
    height: auto;
    width: auto;
    right: 5%;
    bottom: 5%;
    margin-padding: 0.5em;
    text-align: right;
  `}
`;

class App extends Component {
  render() {
    const {
      backgroundImages,
      carouselItems,
      contactMethods,
      subTitle,
      title,
    } = this.props;

    return (
      <AppContainer backgroundImages={backgroundImages}>
        <HeaderContainer>
          <Header>{title}</Header>
          {subTitle && (
            <Subheader>{subTitle}</Subheader>
          )}
          <ContactInformation  contactMethods={contactMethods}/>
        </HeaderContainer>
        <Carousel carouselItems={carouselItems} />
      </AppContainer>
    );
  };
};

App.propTypes = {
  backgroundImages: PropTypes.object,
  carouselItems: PropTypes.arrayOf(PropTypes.object),
  contactMethods: PropTypes.arrayOf(PropTypes.object),
  subTitle: PropTypes.string,
  title: PropTypes.string,
};

export default App;
