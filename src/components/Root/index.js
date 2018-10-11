import React, { Component } from 'react';
import styledComponents from 'styled-components';

const RootContainer = styledComponents.div`
  position: relative;
  display: block;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
`;

class Root extends Component {
  render() {
    return (
      <RootContainer />
    );
  };
};

export default Root;
