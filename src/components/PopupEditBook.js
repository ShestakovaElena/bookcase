import React from 'react';
import FormForBook from './FormForBook'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useFormik} from 'formik';
import BooksDataService from "../services/book.service";
import { validationSchema } from './utils'


function PopupEditBook(props) {
  const {
      modal,
      toggle, 
      book
    } = props;

  const formik = useFormik({
    initialValues: {
      title: book.title, 
      author: book.author, 
      published_at: book.published_at,
      isbn: book.isbn
        
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
      BooksDataService.update(book.id, values)
      .then((res) => {
        console.log(res)
        alert('The book is edited')
      })
      .catch(e => console.log(e))

    },
  });
  
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Change book´s data </ModalHeader>
        <ModalBody>
          <FormForBook formik={formik} toggle={toggle}/>
        </ModalBody>
      </Modal>
    </div>
  );
}
    
export default PopupEditBook