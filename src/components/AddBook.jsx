import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook, getBooks } from '../redux/books/booksSlice';

const AddBook = () => {
  //  const { books } = useSelector((store) => store.books);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const item_id = nanoid();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookObj = {
      item_id,
      title,
      author,
      category: 'Action',
    };

    dispatch(addBook(bookObj)).then(() => {
      setTitle('');
      setAuthor('');
      dispatch(getBooks());
    });
  };

  return (
    <div>
      <h2>Add a new Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={author}
          type="text"
          name="author"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBook;
