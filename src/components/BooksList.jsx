import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { getBooks } from '../redux/books/booksSlice';
import '../styles/BooksList.css';

const BooksList = () => {
  const { books } = useSelector((store) => store.books);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <ul className="books-container">
      {Object.entries(books).map((book) => (
        <Book key={book[0]} book={book} />
      ))}
    </ul>
  );
};

export default BooksList;
