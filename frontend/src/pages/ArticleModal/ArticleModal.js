import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ArticleModal(props) {
    const article  = props.article
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="outline-dark" size="sm" onClick={handleShow}>
          Read
        </Button>
  
        <Modal 
        show={show} 
        onHide={handleClose}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{article.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {article.content} 
              <div></div>
              <small>
              { article.authorId ? `Author: ${article?.author.firstName} ${article?.author.lastName}` : ''}
              </small>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ArticleModal;