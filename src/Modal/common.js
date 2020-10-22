import { createContext } from "react";

/**
 * Context for "Modal" <-> "Modal.Content" communication
 */
export const ModalContext = createContext({});

/**
 * Identifier is needed to find host element when rendering using React Portal
 */
export const HOST_ELEMENT_ID = "modal-host";
