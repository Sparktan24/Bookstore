import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { getBooks } from '../redux/books/booksSlice';

const BooksList = () => {
  const { books } = useSelector((store) => store.books);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      {Object.entries(books).map((book) => (
        <Book key={book[0]} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
