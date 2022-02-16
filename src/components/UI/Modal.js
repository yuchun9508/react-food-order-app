import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <Fragment>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <div className={classes.modal}>{props.children}</div>
    </Fragment>,
    document.getElementById('overlays')
  );
};

export default Modal;
