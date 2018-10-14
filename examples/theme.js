const _COLORS = {
  black: '#222',
  blue: '#003973',
  brown: '#c9bda7',
  white: '#fff',
};

const _FONT_FAMILIES = {
  header: 'Montserrat, Helvetica, Arial, sans-serif',
  base: '"Open Sans", Helvetica, Arial, sans-serif',
};

const _ZINDICES = {
  bottom: 1,
  middle: 5,
  top: 10,
};

const app = {
  backgroundColor: _COLORS.white,
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

const headerContainer = {
  background: `linear-gradient(
    179deg,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0.0) 5%,
    rgba(239,236,230,0.5) 28%,
    rgba(229,224,214,0.8) 46%,
    rgba(217,209,193,1) 69%,
    rgba(201,189,167,1) 100%)
  `,
  desktop: {
    background: 'none',
  },
};

const headers = {
  fontFamily: _FONT_FAMILIES.header,
  fontWeight: '500',
  letterSpacing: '0.05ch',
};

const links = {
  fontColor: _COLORS.blue,
  iconHeight: '40px',
  iconWidth: '40px',
  iconPadding: '5px',
  iconBorder: `2px solid ${_COLORS.blue}`,
  iconBorderRadius: '100%',
  iconTransition: '0.25s all',
  onActive: {
    fontColor: _COLORS.white,
    iconBackgroundColor: _COLORS.blue,
  }
};

const subheaders = {
  fontFamily: _FONT_FAMILIES.header,
  fontWeight: '500',
  letterSpacing: '0.05ch',
};

const theme = {
  app,
  fontFamilies,
  headerContainer,
  headers,
  links,
  subheaders,
};

export default theme;
