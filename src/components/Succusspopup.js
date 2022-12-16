import React from "react";
import {Modal} from 'react-bootstrap'
const Successpopup=(props)=>{
    const {show,close,successMsg}=props;
return(
    <div>
        <Modal show={show} onHide={close}>
        <Modal.Header closeButton   onClick={close}>
        <Modal.Title>Registration successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <center><h5>{successMsg}</h5></center>
       </Modal.Body>
        </Modal>
    </div>
)
}
export default Successpopup;