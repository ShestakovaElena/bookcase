import React from 'react';
import { Button } from 'reactstrap';
import BooksDataService from "../services/book.service";
import { Link } from 'react-router-dom';

function BookItem (props){
    let {book} = props
        
    function deleteBook(id) {
        if (localStorage.getItem('loggedIn')){
            const confirm = window.confirm('Вы уверены, что хотите удалить книгу?')
            if (confirm === true) {
                BooksDataService.delete(id)
                .then(res => {
                    alert('Book is deleted')
                })
                .catch(e => console.log(e))
            }
            else return
        } else {
            alert('You need to sign in to delete books');
        }
   }
    
    return(
        <tr>
            <th>{book.title}</th>
            <td>{book.author}</td>
            <td>{book.published_at}</td>
            <td>{book.isbn}</td>
            <th>
                <Button style={{marginRight:"20px"}} size="sm" color="success" ><Link className='booklink' to={`/books/${book.id}`}>Edit</Link> 
                </Button>
                <Button size="sm" onClick={() => deleteBook(book.id)} color="danger">Del</Button>                
            </th>
        </tr>
    )
    
}
export default BookItem