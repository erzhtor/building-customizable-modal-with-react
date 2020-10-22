import React, { useContext, useRef, useEffect, useCallback } from "react";
import cx from "classnames";
import { ModalContext } from "./common";

import styles from "./modal.module.css";

/**
 * Triggers a callback when clicking outside of "ref" and inside of "parentRef"
 * @param {object} ref React reference to a main element
 * @param {object} parentRef React reference to a parent node which holds main element
 * @param {function} callback callback to trigger
 */
function useOutsideClick(ref, parentRef, callback) {
  const handleMouseDown = useCallback(
    e => {
      e.preventDefault();
      if (ref && ref.current && ref.current.contains(e.target)) {
        return;
      }
      callback && callback();
    },
    [callback, ref]
  );

  useEffect(() => {
    const parentElem = parentRef.current;
    parentElem.addEventListener("mousedown", handleMouseDown);
    return () => parentElem.removeEventListener("mousedown", handleMouseDown);
  }, [handleMouseDown, parentRef]);
}

/**
 * Modal Main Content component
 */
export const ModalContent = ({ className, ...props }) => {
  const ref = useRef(null);
  const { onDismiss, parentRef } = useContext(ModalContext);
  useOutsideClick(ref, parentRef, onDismiss);

  return (
    <div className={cx(styles.ModalContent, className)} ref={ref} {...props} />
  );
};
