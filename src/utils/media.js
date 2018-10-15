import { css, } from 'styled-components';

const breakpoints = [
  {
    name: 'mobile',
    width: 480,
  },
  {
    name: 'tablet',
    width: 768,
  },
  {
    name: 'smallDesktop',
    width: 1024,
  },
  {
    name: 'desktop',
    width: 1440,
  },
];

const max = {};
const min = {};

breakpoints.map(({ name, width, } = {}) => {
  max[name] = (...args) => css`
    @media screen and (max-width: ${width - 1}px) {
      ${css(...args)}
    }
  `;
  min[name] = (...args) => css`
    @media screen and (min-width: ${width}px) {
      ${css(...args)}
    }
  `;
});

const getAvailableBreakpointNames = () => breakpoints.map(breakpoint => breakpoint.name);

export const availableBreakpoints = getAvailableBreakpointNames();

export default {
  max,
  min,
};
