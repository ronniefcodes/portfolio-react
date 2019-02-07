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

const themeableProperties = {
  position: 'position',
  positionBottom: 'bottom',
  positionLeft: 'left',
  positionRight: 'right',
  positionTop: 'top',
  display: 'display',
  height: 'height',
  minHeight: 'min-height',
  maxHeight: 'max-height',
  width: 'width',
  minWidth: 'min-width',
  maxWidth: 'max-width',
  margin: 'margin',
  padding: 'padding',
  fontColor: 'color',
  fontFamily: 'font-family',
  fontSize: 'font-size',
  fontWeight: 'font-weight',
  letterSpacing: 'letter-spacing',
  textAlign: 'text-align',
  textDecoration: 'text-decoration',
  textTransform: 'text-transform',
  background: 'background',
  backgroundColor: 'background-color',
  backgroundPosition: 'background-position',
  backgroundRepeat: 'background-repeat',
  backgroundSize: 'background-size',
  border: 'border',
  borderWidth: 'border-width',
  borderRadius: 'border-radius',
  boxShadow: 'box-shadow',
  filter: 'filter',
  transform: 'transform',
  transition: 'transition',
  animation: 'animation',
  animationDuration: 'animation-duration',
  animationTimingFunction: 'animation-timing-function',
  opacity: 'opacity',
  zIndex: 'z-index',
};

export const generateCssFromTheme = (themeElement, providedThemeProps) => {
  if (!themeElement) return '';

  const themedProperties = providedThemeProps || Object.keys(themeElement);

  let styledAttributes = '';
  themedProperties.forEach(key => {
    if(themeableProperties[key] && themeElement[key]) {
      styledAttributes += `${themeableProperties[key]}: ${themeElement[key]};`;
    }
  });

  return styledAttributes;
};
