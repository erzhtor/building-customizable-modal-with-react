import React from "react";
import cx from "classnames";

import styles from "./button.module.css";

export const Button = ({ className, primary, secondary, ...props }) => (
  <button
    className={cx(styles.Button, className, {
      [styles.Primary]: primary,
      [styles.Secondary]: secondary
    })}
    {...props}
  />
);
