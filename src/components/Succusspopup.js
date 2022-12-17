import React from "react";
import { Button, Modal } from 'react-bootstrap'
import { Link } from "react-router-dom";
const Successpopup = (props) => {
    const { show, close, successMsg } = props;
    return (
        <div>
            <Modal show={show} onHide={close}>
                <Modal.Header closeButton onClick={close}>
                    <Modal.Title>Registration successfully</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center><h5>{successMsg}</h5></center>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button"><Link to="/Login">Login</Link></Button>
                </Modal.Footer>
            </Modal>
          
        </div>
    )
}
export default Successpopup;