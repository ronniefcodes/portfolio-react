import React from 'react';
import { render, } from 'react-dom';
import Root from 'Components/Root';

const renderApp = (props, elementId = 'react-root') => {
  render(<Root {...props} />, document.getElementById(elementId));
};

export default renderApp;
