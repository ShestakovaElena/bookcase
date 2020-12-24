import React from 'react';
import FormForBook from './FormForBook'
import { useFormik} from 'formik';
import BooksDataService from "../services/book.service";
import { validationSchema } from './utils'
import { useHistory } from 'react-router-dom'; 
import { useParams } from 'react-router-dom';

function EditBook(props) {
  const history = useHistory(); 
  let { id } = useParams();
  
  const {
      books
    } = props;

    const book = books.find(f => f.id === id);
    const formik = useFormik({
    
    initialValues: {
      title: book.title, 
      author: book.author, 
      published_at: book.published_at,
      isbn: book.isbn
        
    },
    validationSchema,
    onSubmit: values => {
      BooksDataService.update(book.id, values)
      .then((res) => {
        console.log(res)
        alert('The book is edited')
        history.push('/')
      })
      .catch(e => console.log(e))
    },
  });
  
  return (
    <div>
      <FormForBook formik={formik}/>
    </div>
  );
}
    
export default EditBook