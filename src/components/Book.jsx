import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/booksSlice';
import '../styles/Book.css';

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
    <li className="bookCont">
      <div className="book">
        <p className="category">{category}</p>
        <h2 className="title">{title}</h2>
        <h3 className="author">{author}</h3>
        <button className="bookButton line" type="button">
          Comments
        </button>
        <button
          type="button"
          className="bookButton line"
          onClick={() => handleRemoveBook(item_id)}
        >
          Remove
        </button>
        <button className="bookButton" type="button">
          Edit
        </button>
      </div>
      <div className="progress">
        <div className="circle" />
        <div className="percent">
          <h2 className="percent-number">10%</h2>
          <p className="percent-text">Completed</p>
        </div>
      </div>
      <div className="chapterCont">
        <p className="current">CURRENT CHAPTER</p>
        <p className="chapter">Introduction</p>
        <button className="update" type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </li>
  );
};

export default Book;
