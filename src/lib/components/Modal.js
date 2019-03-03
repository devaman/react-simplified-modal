import React from 'react';
import './Modal.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const Modal = (props) => {
  let ret=null;
  if (props.open) {
    ret = (
      <div className="react-modal-classname">
      <div className="backdrop" onClick={props.onBackDropClicked}></div>
      <div className="modal" onClick={props.onModalClicked}> 
        <div className="close-icon"onClick={props.onCloseClicked}>
          <div></div>
          <div></div>
        </div>
       {props.children} 
       </div>
      
      </div>
    )
  }
  return (<ReactCSSTransitionGroup  transitionName="modal"
  transitionEnterTimeout={500}
  transitionLeaveTimeout={300} >{ret}</ReactCSSTransitionGroup>)
}
export default Modal;