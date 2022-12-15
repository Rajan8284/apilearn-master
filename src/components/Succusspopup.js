import React from "react";
import {Modal} from 'react-bootstrap'
const Successpopup=(props)=>{
    const {show,close,responseMsg}=props;
return(
    <div>
         <Modal show={show} onHide={close}>
        <Modal.Header closeButton={close}>
        <Modal.Title>Registration successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <h6>{responseMsg.message}</h6>
        </Modal.Body>
       
      </Modal>
    </div>
)
}
export default Successpopup;