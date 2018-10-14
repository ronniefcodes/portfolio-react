import baseTheme from 'Theme';

export const generateThemeFromBase = (theme) => {
  const generatedTheme = {};

  Object.keys(baseTheme).forEach(key => {
    generatedTheme[key] = Object.assign({}, baseTheme[key], theme[key]);
  });

  return generatedTheme;
};
