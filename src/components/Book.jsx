import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const [item_id, [bookObj]] = book;
  const { title, author, category } = bookObj;

  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    axios
      .delete(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hJLD5bnJVUBuazb5SvIz/books/${id}`,
      )
      .then(() => {
        dispatch(getBooks());
      });
  };
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
      <button type="button" onClick={() => handleRemoveBook(item_id)}>
        Delete
      </button>
    </div>
  );
};

export default Book;
