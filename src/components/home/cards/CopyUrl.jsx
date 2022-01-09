import React, { useState } from 'react'
import { Modal } from "react-bootstrap";
import classes from './CopyUrl.module.css'
import CopyToClipboard from 'react-copy-to-clipboard';

const Copyurl = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{fontSize: '1.2em'}}>
          Copy Url
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div class="input-group input-group-lg d-flex align-items-center">

          <input type="text" style={{fontSize: '1em'}} class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" value={props.url} />
          <CopyToClipboard text={props.url}>
            <button class="btn btn-primary" style={{fontSize: '1em', height: '3.2em'}} type="button" id="button-addon2">Copy URL</button>
          </CopyToClipboard>

        </div>


      </Modal.Body>

    </Modal>
  );
}

export default Copyurl;