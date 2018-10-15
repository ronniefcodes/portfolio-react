import baseTheme from 'Theme';
import { availableBreakpoints, } from 'Utils/media';

export const generateThemeFromBase = (theme = {}) => {
  const generatedTheme = {};

  Object.keys(baseTheme).forEach(key => {
    const baseProps = baseTheme[key] || {};
    const props = theme[key] || {};

    generatedTheme[key] = Object.assign({}, baseProps, props);
    availableBreakpoints.forEach(breakpoint =>
      generatedTheme[key][breakpoint] = Object.assign({}, baseProps[breakpoint], props[breakpoint])
    );
  });

  return generatedTheme;
};
