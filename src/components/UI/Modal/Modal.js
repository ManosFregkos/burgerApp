import React, { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

export default function Modal(props) {
  return (
    <Fragment>
      <Backdrop clicked={props.modalClosed} show={props.show} />
      <div
        className="Modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
}
