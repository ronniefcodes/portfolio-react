export const clearfix = `
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const absolutelyCentred = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const horizontallyCentred = `
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const verticallyCentred = `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
