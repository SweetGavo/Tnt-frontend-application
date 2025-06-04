'use strict'

import React from "react";
import PropTypes from "prop-types";
import styles from '../styles/TextField.module.scss';

const TextField = ({
  label = "",
  variant = "",
  style = {},
  className = "",
  radius = 10,
  prependIcon = null,
  appendIcon = null,
  ...others
}) => {
  const inlineStyles = {
    borderRadius: `${radius}px`,
    ...style,
  };

  const prependClass = appendIcon ? "appendIcon" : prependIcon ? "prependIcon" : "";

  return (
    <div className={`${styles.formField} ${className}`}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={`${styles.inputCover} ${prependClass}`}>
        {prependIcon && <div className={styles.prependIcon}>{prependIcon}</div>}
        <input {...others} className={`${styles.textInput} ${variant}`} style={inlineStyles} />
        {appendIcon && <div className={styles.appendIcon}>{appendIcon}</div>}
      </div>
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  radius: PropTypes.number,
  prependIcon: PropTypes.node,
  appendIcon: PropTypes.node,
};

export default TextField;