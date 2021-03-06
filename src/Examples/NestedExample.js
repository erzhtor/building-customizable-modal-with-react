import React, { useState, useCallback } from "react";
import Modal from "../Modal";
import { Button } from "./Button";
import styles from "./nested-example.module.css";

export const ModalNestedExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleOpen2 = useCallback(() => setIsOpen2(true), []);

  const handleClose = useCallback(() => setIsOpen(false), []);
  const handleClose2 = useCallback(() => setIsOpen2(false), []);
  return (
    <div>
      <Button secondary onClick={handleOpen}>
        Show Nested Modal Example
      </Button>
      <Modal
        className={styles.ModalOverlay}
        open={isOpen}
        onDismiss={handleClose}
      >
        <Modal.Content className={styles.ModalContent}>
          <h2>I'm a fancy Modal</h2>
          <Button primary onClick={handleOpen2}>
            Show Nested Modal
          </Button>
          <Button onClick={handleClose}>Close</Button>
          <Modal
            className={styles.ModalOverlay2}
            open={isOpen2}
            onDismiss={handleClose2}
          >
            <Modal.Content className={styles.ModalContent2}>
              <h3>I'm a fancy Nested Modal!</h3>
              <Button onClick={handleClose2}>Close</Button>
            </Modal.Content>
          </Modal>
        </Modal.Content>
      </Modal>
    </div>
  );
};
