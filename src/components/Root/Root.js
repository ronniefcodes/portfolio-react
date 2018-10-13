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
    app: PropTypes.object.isRequired,
    backgrounds: PropTypes.object.isRequired,
    buttons: PropTypes.object.isRequired,
    carousel: PropTypes.object.isRequired,
    fontFamilies: PropTypes.object.isRequired,
    headerContainer: PropTypes.object.isRequired,
    headers: PropTypes.object.isRequired,
    links: PropTypes.object.isRequired,
  }),
  content: PropTypes.object,
};

export default withGoogleFonts(Root);
