import { keyframes } from 'styled-components';

export const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const chevronDrawLineAndFold = {
  tiltForward: ({ length, rotation, } = {}) => keyframes`
     0% {
        opacity: 0;
        height: 0;
        transform: rotate(0deg);
     }
     70% {
        height: ${length};
        transform: rotate(0deg);
     }
     100% {
        opacity: 1;
        height: ${length};
        transform: rotate(${rotation});
     }
  `,
  tiltBackward: ({ length, rotation, } = {}) => keyframes`
     0% {
       opacity: 0;
        height: 0;
        transform: rotate(0deg);
     }
     70% {
        height: ${length};
        transform: rotate(0deg);
     }
     100% {
        opacity: 1;
        height: ${length};
        transform: rotate(-${rotation});
     }
  `,
};
