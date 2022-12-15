import React from "react";
import {Modal} from 'react-bootstrap'
const Successpopup=(props)=>{
    const {show,close}=props;
return(
    <div>
         <Modal show={show} onHide={close}>
        <Modal.Header closeButton={close}>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        </Modal.Body>
       
      </Modal>
    </div>
)
}
export default Successpopup;