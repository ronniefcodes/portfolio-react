import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';
import colours from 'Theme/colours';
import media from 'Utils/media';
import vLayers from 'Utils/vLayers';

import Carousel from 'Components/Carousel';
import ContactInformation from 'Components/ContactInformation';
import Header from 'Components/Header';
import Subheader from 'Components/Subheader';

const AppContainer = styledComponents.div`
  position: relative;
  display: block;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
  color: ${colours.black};
  background: ${({ backgroundImage, }) => `url(${backgroundImage})`};
`;

const HeaderContainer = styledComponents.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0.5em 0 2.5em;
  z-index: ${vLayers.middle};
  text-align: center;

  ${media.min.desktop`
    height: auto;
    width: auto;
    right: 10%;
    bottom: 50%;
    transform: translateY(50%);
    margin-padding: 0.5em;
  `}
`;

class App extends Component {
  render() {
    const {
      backgroundImage,
      carouselItems,
      contactMethods,
      subTitle,
      title,
    } = this.props;

    return (
      <AppContainer backgroundImage={backgroundImage}>
        <HeaderContainer>
          <Header>{title}</Header>
          {subTitle && (<Subheader>{subTitle}</Subheader>)}
          <ContactInformation  contactMethods={contactMethods}/>
        </HeaderContainer>
        <Carousel carouselItems={carouselItems} />
      </AppContainer>
    );
  };
};

App.propTypes = {
  backgroundImage: PropTypes.string,
  carouselItems: PropTypes.arrayOf(PropTypes.object),
  contactMethods: PropTypes.arrayOf(PropTypes.object),
  subTitle: PropTypes.string,
  title: PropTypes.string,
};

export default App;
