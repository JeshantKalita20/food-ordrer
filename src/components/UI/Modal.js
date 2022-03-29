import { Fragment } from "react";
import classes from "./Modal.module.css";
import reactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const Portal = document.getElementById("overlays");

  return (
    <Fragment>
      {reactDom.createPortal(<Backdrop onClose={props.onClose} />, Portal)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        Portal
      )}
    </Fragment>
  );
};

export default Modal;
