import React from 'react'
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import SignIn from './SignIn'
import SignUp from './SignUp'

function Header(props) {
    
    return(
      <>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Bookcase</NavbarBrand>
              <Collapse navbar>
              <Nav className="mr-auto" navbar >
                <NavItem>
                  <NavLink href="/add-book/">Add book</NavLink>
                </NavItem>
              </Nav>
              <SignIn className='btn'/>
              <SignUp />
              </Collapse>
        </Navbar>
      </>
    )
}

export default Header

/*<div>
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Change book´s data </ModalHeader>
          <ModalBody>
            <SignUpContainer toggle={toggle}/> 
          </ModalBody>
        </Modal>
      </div>
      
      <Button color="info" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
            </Button>
              <Button color="info">Register</Button>*/