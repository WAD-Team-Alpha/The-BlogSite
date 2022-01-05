import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Link } from "@mui/material";
import ModalBody from "./ModalBody";

const ModalButton=()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
       
            <Link class="btn btn-info"  onClick={handleShow}>
                    <i class="bi bi-plus-circle"></i> Create
            </Link> 
      
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Select the one below</Modal.Title>
          </Modal.Header>
          <Modal.Body><ModalBody/></Modal.Body>
         
        </Modal>
      </>
    );
  
}

export default ModalButton;