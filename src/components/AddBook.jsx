import React from 'react';

const AddBook = () => (
  <div>
    <h2>Add a new Book</h2>
    <form>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="author" placeholder="Author" />
      <button type="submit">Add book</button>
    </form>
  </div>
);

export default AddBook;
