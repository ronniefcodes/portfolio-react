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

const app = {
  backgroundColor: _COLORS.black,
  fontFamily: _FONT_FAMILIES.base,
  fontColor: _COLORS.white,
};

const backgrounds = {
  filter: 'brightness(30%)',
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
  positionTop: '50%',
  positionLeft: '50%',
  positionBottom: 'auto',
  positionRight: 'auto',
  transform: 'translate(-50%, -50%)',
  padding: '0',
  smallDesktop: {
    width: 'auto',
    height: 'auto',
    positionBottom: 'auto',
    positionRight: 'auto',
    textAlign: 'center',
  },
};

const headers = {
  fontFamily: _FONT_FAMILIES.header,
  fontWeight: '500',
  letterSpacing: '0.05ch',
};

const subheaders = {
  fontFamily: _FONT_FAMILIES.base,
  fontSize: '16px',
  fontWeight: '500',
  letterSpacing: '0.05ch',
};

const theme = {
  app,
  backgrounds,
  fontFamilies,
  headerContainer,
  headers,
  subheaders,
};

export default theme;
