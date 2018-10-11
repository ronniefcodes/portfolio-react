import React, { Component, } from 'react';
import styledComponents from 'styled-components';
import colours from 'Theme/colours';
import media from 'Utils/media';
import vLayers from 'Utils/vLayers';

import Carousel from 'Components/Carousel';
import ContactInformation from 'Components/ContactInformation';
import Header from 'Components/Header';

const AppContainer = styledComponents.div`
  position: relative;
  display: block;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
  color: ${colours.black};

  ${Header} {
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 0.5em 0 2.5em;
    z-index: ${vLayers.middle};

    ${media.min.desktop`
      height: auto;
      width: auto;
      right: 15%;
      top: 50%;
      bottom: auto;
      transform: translateY(-50%);
      margin-bottom: 0.5em;
    `}
  }
`;


class App extends Component {
  render() {
    const carouselItems = [{
      body: 'Carousel Item A',
      backgroundImage: 'https://picsum.photos/300',
    }, {
      body: 'Carousel Item B',
      backgroundImage: 'https://picsum.photos/300?2',
    }, {
      body: 'Carousel Item C',
      backgroundImage: 'https://picsum.photos/300?3',
    }, {
      body: 'Carousel Item D',
      backgroundImage: 'https://picsum.photos/300?4',
    }];

    return (
      <AppContainer>
        <Header>
          <h1>Lorem Ipsum</h1>
          <p>... and other placeholder copy.</p>
          <ContactInformation />
        </Header>
        <Carousel carouselItems={carouselItems} />
      </AppContainer>
    );
  };
};

export default App;
