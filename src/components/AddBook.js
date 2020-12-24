import React, { useState } from 'react';
import FormForBook from './FormForBook'
import { useFormik} from 'formik';
import BooksDataService from "../services/book.service";
import { validationSchema } from './utils'
import { useHistory } from 'react-router-dom'; 

function AddBook (props) {

  const history = useHistory(); 

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
        history.push('/')
      })
      .catch(e => console.log(e))
    },
  });
  
  return (
    <>
      <div className='form'>
        <FormForBook formik={formik} />
      </div>
    </>
  );
}

export default AddBook