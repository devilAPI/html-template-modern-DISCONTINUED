import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RingSpinner = styled.div`
  height: ___CSS_0___px;
  width: ___CSS_1___px;
  padding: ___CSS_2___px;
  overflow: hidden;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .spinner-ring {
    position: absolute;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: ___CSS_3___;
    animation: fingerprint-spinner-animation
      ___CSS_4___ms
      cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite forwards;
    margin: auto;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
  .spinner-ring:nth-child(1) {
    height: ___CSS_5___px;
    width: ___CSS_6___px;
    animation-delay: calc(50ms * 1);
  }
  .spinner-ring:nth-child(2) {
    height: ___CSS_7___px;
    width: ___CSS_8___px;
    animation-delay: calc(50ms * 2);
  }
  .spinner-ring:nth-child(3) {
    height: ___CSS_9___px;
    width: ___CSS_10___px;
    animation-delay: calc(50ms * 3);
  }
  .spinner-ring:nth-child(4) {
    height: ___CSS_11___px;
    width: ___CSS_12___px;
    animation-delay: calc(50ms * 4);
  }
  .spinner-ring:nth-child(5) {
    height: ___CSS_13___px;
    width: ___CSS_14___px;
    animation-delay: calc(50ms * 5);
  }
  .spinner-ring:nth-child(6) {
    height: ___CSS_15___px;
    width: ___CSS_16___px;
    animation-delay: calc(50ms * 6);
  }
  .spinner-ring:nth-child(7) {
    height: ___CSS_17___px;
    width: ___CSS_18___px;
    animation-delay: calc(50ms * 7);
  }
  .spinner-ring:nth-child(8) {
    height: ___CSS_19___px;
    width: ___CSS_20___px;
    animation-delay: calc(50ms * 8);
  }
  .spinner-ring:nth-child(9) {
    height: ___CSS_21___px;
    width: ___CSS_22___px;
    animation-delay: calc(50ms * 9);
  }

  @keyframes fingerprint-spinner-animation {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const propTypes = {
  size: PropTypes.number,
  animationDuration: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

const defaultProps = {
  size: 60,
  color: '#fff',
  animationDuration: 1500,
  className: '',
};

function generateRings(num) {
  return Array.from({ length: num }).map((val, index) => (
    <div key={index} className="spinner-ring" />
  ));
}

const FingerprintSpinner = ({
  size,
  color,
  animationDuration,
  className,
  style,
  ...props
}) => {
  const ringsNum = 9;
  const containerPadding = 2;
  const outerRingSize = size - containerPadding * 2;
  const ringBase = outerRingSize / ringsNum;

  return (
    <RingSpinner
      size={size}
      color={color}
      animationDuration={animationDuration}
      className={`fingerprint-spinner${className ? ' ' + className : ''}`}
      style={style}
      ringBase={ringBase}
      containerPadding={containerPadding}
      {...props}
    >
      {generateRings(ringsNum)}
    </RingSpinner>
  );
};

FingerprintSpinner.propTypes = propTypes;
FingerprintSpinner.defaultProps = defaultProps;

export default FingerprintSpinner;