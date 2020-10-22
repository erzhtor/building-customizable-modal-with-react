import React from "react";
import { HOST_ELEMENT_ID } from "./common";

/**
 * Host element which will contain all rendered modals
 */
export const ModalHost = props => <div {...props} id={HOST_ELEMENT_ID} />;
