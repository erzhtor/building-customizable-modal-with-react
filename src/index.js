import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { ModalSimpleExample, ModalNestedExample } from "./Examples";
import Modal from "./Modal";

import styles from "./styles.module.css";

const App = () => (
  <Fragment>
    <main className={styles.App}>
      <h1>Welcome to Modal Example!</h1>
      <div className={styles.Container}>
        <ModalSimpleExample />
        <ModalNestedExample />
      </div>
    </main>
    {/* Host element which will contain all modals (using React.Portal) */}
    <Modal.Host />
  </Fragment>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
