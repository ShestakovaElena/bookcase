import React from 'react';
import FormForBook from './FormForBook'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useFormik} from 'formik';
import BooksDataService from "../services/book.service";
import { validationSchema } from './utils'

function PopupAddBook(props) {
  const {
      modal,
      toggle, 
      book
    } = props;

  const formik = useFormik({
    initialValues: {
        title: '', 
        author: '', 
        published_at: '',
        isbn: ''
        
    },
    validationSchema,
    onSubmit: values => {
      BooksDataService.create(values)
      .then((res) => {
        console.log(values)
        formik.resetForm();
        alert('New book is added!')
      })
      .catch(e => console.log(e))
    },
  });
  
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Add book´s data</ModalHeader>
        <ModalBody>
          <FormForBook formik={formik} toggle={toggle}/>
        </ModalBody>
      </Modal>
    </div>
  );
}
