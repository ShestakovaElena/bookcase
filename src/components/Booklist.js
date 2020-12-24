import React from 'react';
import { Table } from 'reactstrap';
import BookItem from './BookItem'

class Booklist extends React.Component{
  
  /*constructor(props) {
    super(props);
    /*this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      books: [],
      currentTutorial: null,
      currentIndex: -1,
    };

    this.unsubscribe = undefined;
  }

  componentDidMount() {
    this.unsubscribe = BooksDataService.getAll().orderBy("title", "asc").onSnapshot(this.onDataChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onDataChange(items) {
    let tutorials = [];
    items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      tutorials.push({
        id: id,
        title: data.title,
        author: data.author,
        published_at: data.published_at,
        isbn: data.isbn,
      });
    });

    this.setState({
      books: tutorials,
    });
  }

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
  }
    */
    render() {
        return (
            <Table hover>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Year of Publication</th>
                  <th>ISBN</th>
                  <th>Edit book</th>
                </tr>
              </thead>
              <tbody>
                {
                this.props.books ? this.props.books.map( book => <BookItem book={book} key={book.id}/>) : <tr><th>Никаких книг на полке нет</th></tr>
                }
              </tbody>
            </Table>
            
          );
    }
}

export default Booklist