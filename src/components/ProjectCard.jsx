import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaGithubAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div >
        <Card style={{ width: '18rem',height:'100px' }} onClick={handleShow}>
      <Card.Img variant="top" style={{height:'400px'}} src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczUyZXIyMTU4ZzRhZmNpMmdjaGp5aWhlMmJnN3EzYWd5bHU1OTJ5eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iIqmM5tTjmpOB9mpbn/giphy.gif" />
      <Card.Body>
        <Card.Title className='text-center'>Project Title</Card.Title>
     
      </Card.Body>
   
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <img width={'100%'} src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczUyZXIyMTU4ZzRhZmNpMmdjaGp5aWhlMmJnN3EzYWd5bHU1OTJ5eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iIqmM5tTjmpOB9mpbn/giphy.gif" alt="" />
            </div>
            <div className="col-6">
              <h2>Project title</h2>
             <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo obcaecati dolorum eaque maxime labore voluptates fuga aperiam accusamus soluta sint tempora</p>
             <p>Technology used : <b>React,Node</b></p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='me-3'><a href=""><FaGithubAlt /></a></Button>
          <Button className='me-3'><a href=""><FaLink /></a></Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProjectCard