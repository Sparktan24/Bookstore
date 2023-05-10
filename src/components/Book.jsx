import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const {
    item_id, title, author, category,
  } = book;
  const dispatch = useDispatch();
  return (
    <div>
      <h1>
        Book
        {title}
      </h1>
      By
      {author}
      <p>
        {item_id}
        ,
        {category}
      </p>
      <button type="button" onClick={() => dispatch(removeBook(item_id))}>
        Delete
      </button>
    </div>
  );
};

export default Book;
