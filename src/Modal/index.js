import React, { useRef } from "react";
import ReactDOM from "react-dom";
import cx from "classnames";
import { HOST_ELEMENT_ID, ModalContext } from "./common";
import { ModalHost } from "./ModalHost";
import { ModalContent } from "./ModalContent";

import styles from "./modal.module.css";

/**
 * Checks if not SSR
 */
const isBrowser = () =>
  !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );

/**
 * Modal component
 * Renders into <Modal.Host/> if exists, otherwise fallbacks to inline rendering
 */
const Modal = ({ open, onDismiss, children, className, ...props }) => {
  const ref = useRef(null);
  if (!open) {
    return null;
  }
  const hostElement = document.getElementById(HOST_ELEMENT_ID);

  const content = (
    <ModalContext.Provider value={{ onDismiss, parentRef: ref }}>
      <div className={cx(styles.Modal, className)} ref={ref} {...props}>
        {children}
      </div>
    </ModalContext.Provider>
  );

  if (hostElement && isBrowser()) {
    return ReactDOM.createPortal(content, hostElement);
  }

  console.warn(
    'Could not find "<Modal.Host />" node.\n Switched to inline rendering mode.'
  );

  return content;
};

// Grouping components into "Modal" namespace
Modal.Host = ModalHost;
Modal.Content = ModalContent;

export default Modal;
