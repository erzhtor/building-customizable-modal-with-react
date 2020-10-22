import React from "react";
import cx from "classnames";

import styles from "./button.module.css";

export const Button = ({ className, ...props }) => (
  <button className={cx(styles.Button, className)} {...props} />
);
