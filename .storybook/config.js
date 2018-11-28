import React from 'react';
import { configure, addDecorator, setAddon, } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { ThemeProvider, } from 'styled-components';
import { withGoogleFonts, } from 'Components/Fonts';
import { generateThemeFromBase, } from 'Utils/theme';
import theme from './theme';

setAddon(infoAddon);

const req = require.context('../src', true, /\.stories\.js$/);

addDecorator(story => <ThemeProvider theme={generateThemeFromBase(theme)}>{story()}</ThemeProvider>);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
