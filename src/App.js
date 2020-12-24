import React from 'react'
import Booklist from './components/Booklist'
import AddBook from './components/AddBook'
import Header from './components/Header'
import { Route } from 'react-router-dom';
import BooksDataService from "./services/book.service";
import EditBook from './components/EditBook'
import PrivateRoute from './components/PrivateRoute'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      authenticated: false,
      
    };

    this.onDataChange = this.onDataChange.bind(this);
  }
  
  componentDidMount() {
    if (localStorage.getItem('loggedIn')) {
      this.setState({
        authenticated: true,
      });
    }
    BooksDataService.getAll().orderBy("title", "asc").onSnapshot(this.onDataChange);
    
  }

  onDataChange(items) {
    let renderedBooks = [];
    items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      renderedBooks.push({
        id: id,
        title: data.title,
        author: data.author,
        published_at: data.published_at,
        isbn: data.isbn,
      });
    });

    this.setState({
      books: renderedBooks,
    });
  }

  render(){
    return(
      <div className='App'>
        <Header />  
        <Route exact path="/">
          <Booklist books={this.state.books}/>
        </Route>      
        <Route path="/add-book">
          <AddBook />
        </Route>
        <PrivateRoute books={this.state.books} component={EditBook } authenticated={this.state.authenticated} path="/books/:id">
        </PrivateRoute>
      </div>
    )
  }
  
}
export default App;
