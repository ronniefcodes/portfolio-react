import { injectGlobal, } from 'styled-components';

const fonts = {
  header: 'Montserrat, sans-serif',
  body: 'Open Sans, sans-serif',
};

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:500|Open+Sans:300');

  html {
    font-family: ${fonts.body};
    font-weight: 300;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.header};
    font-weight: 500;
    letter-spacing: 0.05ch;
    text-transform: uppercase;
  }
`;

export default fonts;
