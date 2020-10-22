import React, { useState, useCallback } from "react";
import Modal from "../Modal";
import { Button } from "./Button";
import styles from "./simple-example.module.css";

export const ModalSimpleExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);
  return (
    <div>
      <Button onClick={handleOpen}>Show Simple Modal</Button>
      <Modal
        className={styles.ModalOverlay}
        open={isOpen}
        onDismiss={handleClose}
      >
        <Modal.Content className={styles.ModalContent}>
          I'm a fancy modal
        </Modal.Content>
      </Modal>
    </div>
  );
};
