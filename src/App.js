import React from 'react'
import Booklist from './components/Booklist'
import AddBook from './components/AddBook'
import Header from './components/Header'
import { Route } from 'react-router-dom';
import BooksDataService from "./services/book.service";
import EditBook from './components/EditBook'
import PrivateRoute from './PrivateRoute'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      currentTutorial: null,
      currentIndex: -1,
      authenticated: false,
      currentUser: null,
    };

    //this.unsubscribe = undefined;
    //this.refreshList = this.refreshList.bind(this);
    //this.setActiveTutorial = this.setActiveTutorial.bind(this);
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

  /*componentWillUnmount() {
    this.unsubscribe();
  }*/

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
/*
  refreshList() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }
  
  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }*/
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
