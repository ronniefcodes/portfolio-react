import React, { Component } from 'react';
import styledComponents from 'styled-components';

const AppContainer = styledComponents.div`
  position: relative;
  display: block;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
`;

class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  };
};

export default App;
