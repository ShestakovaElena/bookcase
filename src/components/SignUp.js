import React, { useState } from 'react';
import { Button } from 'reactstrap';
import SignUpForm from './SignupForm'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

function SignUp (props) {
  
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  return (
    <>
      <div>
        <Button color="info" onClick={toggle} >Register</Button>
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Sign up to continue</ModalHeader>
          <ModalBody>
            <SignUpForm modal={modal} toggle={toggle}/>
          </ModalBody>
        </Modal>
        
      </div>
    </>
  );
}

export default SignUp