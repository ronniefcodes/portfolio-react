const _COLORS = {
  black: '#222',
  blue: '#003973',
  brown: '#c9bda7',
  white: '#fff',
};

const _FONT_FAMILIES = {
  header: 'Helvetica, Arial, sans-serif',
  base: 'Helvetica, Arial, sans-serif',
};

const buttons = {
  fontColor: _COLORS.black,
  fontFamily: _FONT_FAMILIES.base,
};

const fontFamilies = {
  googleFonts: [{
    name: 'Montserrat',
    weights: [
      500,
    ],
  }, {
    name: 'Open Sans',
    weights: [
      300,
    ]
  }]
};

const headers = {
  fontFamily: _FONT_FAMILIES.header,
  fontWeight: '500',
  letterSpacing: '0.05ch',
};

const links = {
  fontColor: _COLORS.black,
  fontFamily: _FONT_FAMILIES.base,
};

const subheaders = {
  fontFamily: _FONT_FAMILIES.base,
  fontSize: '16px',
  fontWeight: '500',
  letterSpacing: '0.05ch',
};

const theme = {
  buttons,
  fontFamilies,
  headers,
  links,
  subheaders,
};

export default theme;
