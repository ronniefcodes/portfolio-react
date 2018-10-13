import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styledComponents, {
  injectGlobal,
  ThemeProvider,
} from 'styled-components';
import App from 'Components/App';
import withGoogleFonts from 'Components/Fonts/withGoogleFonts';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

class Root extends Component {
  render() {
    const {
      content,
      theme,
    } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <App {...content} />
      </ThemeProvider>
    );
  };
};

Root.propTypes = {
  theme: PropTypes.object,
  content: PropTypes.object,
};

export default withGoogleFonts(Root);
