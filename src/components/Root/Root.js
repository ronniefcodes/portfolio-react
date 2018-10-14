import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  injectGlobal,
  ThemeProvider,
} from 'styled-components';
import { generateThemeFromBase, } from 'Utils/theme';
import { withGoogleFonts, } from 'Components/Fonts';
import App from 'Components/App';

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

    const generatedTheme = generateThemeFromBase(theme);

    return (
      <ThemeProvider theme={generatedTheme}>
        <App {...content} />
      </ThemeProvider>
    );
  };
};

Root.propTypes = {
  theme: PropTypes.shape({
    app: PropTypes.object,
    backgrounds: PropTypes.object,
    buttons: PropTypes.object,
    carousel: PropTypes.object,
    carouselNavButtons: PropTypes.object,
    fontFamilies: PropTypes.object,
    headerContainer: PropTypes.object,
    headers: PropTypes.object,
    links: PropTypes.object,
  }),
  content: PropTypes.object,
};

export default withGoogleFonts(Root);
