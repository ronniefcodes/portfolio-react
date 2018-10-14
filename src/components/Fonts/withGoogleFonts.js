import React from 'react';
import { injectGlobal, } from 'styled-components';

const getFontFamilyParameter = (fontFamilies) => {
  if (!fontFamilies) return '';

  return fontFamilies.map(fontFamily => {
    const weights = fontFamily.weights ? `:${fontFamily.weights.join(',')}` : null;
    return `${fontFamily.name.replace(/\s/g, '+')}${weights}`;
  }).join('|');
};

function withGoogleFonts(WrappedComponent) {
  return (props) => {
    const { theme, } = props;

    if (!!theme.fontFamilies) {
      injectGlobal`
        @import url(${`https://fonts.googleapis.com/css?family=${getFontFamilyParameter(theme.fontFamilies.googleFonts)}`});
      `;
    }

    return (<WrappedComponent {...props} />);
  };
}

export default withGoogleFonts;
