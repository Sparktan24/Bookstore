import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  let title = '';
  let author = '';
  const item_id = 'temporary';
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookObj = {
      item_id,
      title,
      author,
      category: 'not defined yet',
    };
    dispatch(addBook(bookObj));
  };

  return (
    <div>
      <h2>Add a new Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => { title = e.target.value; }}
        />
        <input
          id="author"
          type="text"
          name="author"
          placeholder="Author"
          onChange={(e) => { author = e.target.value; }}
        />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBook;
