import React, { useState } from 'react';
import { Button } from 'reactstrap';
import SignInForm from './SignInForm'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

function SignIn (props) {
  
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  return (
    <>
      <div>
        <Button color="info" onClick={toggle} >Sign In</Button>
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Sign in to continue</ModalHeader>
          <ModalBody>
            <SignInForm isLoggedIn={props.isLoggedIn} modal={modal} toggle={toggle}/>
          </ModalBody>
        </Modal>
        
      </div>
    </>
  );
}

export default SignIn