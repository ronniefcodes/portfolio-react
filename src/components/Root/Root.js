import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styledComponents, {
  injectGlobal,
  ThemeProvider,
} from 'styled-components';
import baseTheme from 'Theme';

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
      <ThemeProvider theme={Object.assign({}, baseTheme, theme)}>
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
