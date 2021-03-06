import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { bounce, chevronDrawLineAndFold, } from 'Theme/animations';
import { generateCssFromTheme, } from 'Utils/theme';

const calculateRotationOffset = ({ armRotationAngle, armLength, } = {}) =>
  parseInt(armRotationAngle) / (90-parseInt(armRotationAngle)) * parseInt(armLength);

const chevronForward = (theme) => `
  transform: rotate(${theme.armRotationAngle});
  animation-name: ${theme.armAnimationName || chevronDrawLineAndFold.tiltForward({
    length: theme.armLength,
    rotation: theme.armRotationAngle,
  })};
`;

const chevronBack = (theme) => `
  transform: rotate(-${theme.armRotationAngle});
  animation-name: ${theme.armAnimationName || chevronDrawLineAndFold.tiltBackward({
    length: theme.armLength,
    rotation: theme.armRotationAngle,
  })};
`;

const ChevronArm = styled.div`
  ${({ direction, theme, }) => `margin-${direction}: ${calculateRotationOffset(theme.chevrons)}px;`}
  ${({ theme, }) => generateCssFromTheme(theme.chevrons, [
    'background',
  ])}

  ${({ theme, }) => `
    animation-duration: ${theme.chevrons.armAnimationDuration};
    animation-timing-function: ${theme.chevrons.armAnimationTimingFunction};
    height: ${theme.chevrons.armLength};
    width: ${theme.chevrons.armWidth};
  `};
`;

const TopChevronArm = styled(ChevronArm)`
  ${({ direction, theme, }) => direction === 'left' ? chevronBack(theme.chevrons) : chevronForward(theme.chevrons)}
  transform-origin: bottom center;
  margin-bottom: -1px;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
`;

const BottomChevronArm = styled(ChevronArm)`
  ${({ direction, theme, }) => direction === 'left' ? chevronForward(theme.chevrons) : chevronBack(theme.chevrons)}
  transform-origin: top center;
  margin-top: -1px;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
`;

const StyledChevron = styled.div`
  ${({ theme, }) => generateCssFromTheme(theme.chevrons, [
    'height',
  ])}

  &:active, 
  &:focus,
  &:hover {
    ${({ theme, }) => `
      animation-name: ${theme.chevrons.activeAnimationName || bounce};
      animation-duration: ${theme.chevrons.activeAnimationDuration};
      animation-timing-function: ${theme.chevrons.activeAnimationTimingFunction};
      animation-iteration-count: ${theme.chevrons.activeAnimationIterationCount};
    `}

    ${ChevronArm} {
      ${({ theme, }) => `box-shadow: ${theme.chevrons.armActiveBoxShadow};`}
    }
  }
`;

const Chevron = (props) => {
  const { direction, } = props;
  return (
    <StyledChevron>
      <TopChevronArm direction={direction} />
      <BottomChevronArm direction={direction} />
    </StyledChevron>
  );
};

Chevron.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
};

export default Chevron;
