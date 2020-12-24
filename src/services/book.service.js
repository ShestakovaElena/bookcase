import firebase from "./firebase";

const bookDb = firebase.collection("/books");

class BooksDataService {
  getAll() {
    return bookDb;
  }

  create(book) {
    return bookDb.add(book);
  }

  update(id, value) {
    return bookDb.doc(id).update(value);
  }

  delete(id) {
    return bookDb.doc(id).delete();
  }
}

export default new BooksDataService();
