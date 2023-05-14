import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook, getBooks } from '../redux/books/booksSlice';
import '../styles/AddBook.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const item_id = nanoid();
  const dispatch = useDispatch();

  const categories = ['Suspence', 'Horror', 'Action', 'Romantic', 'Racing'];

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookObj = {
      item_id,
      title,
      author,
      category,
    };

    dispatch(addBook(bookObj)).then(() => {
      setTitle('');
      setAuthor('');
      dispatch(getBooks());
    });
  };

  return (
    <div className="bookForm">
      <h2 className="formTitle">ADD NEW BOOK</h2>
      <form className="add-book" onSubmit={handleSubmit}>
        <input
          className="titleInput"
          value={title}
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="authorInput"
          value={author}
          type="text"
          name="author"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          className="categoryInput"
          name="category"
          placeholder="Select a category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button className="submit" type="submit">
          <span>ADD BOOK</span>
        </button>
      </form>
    </div>
  );
};

export default AddBook;
