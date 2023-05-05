import React from 'react';

const Book = ({ book }) => {
  const {
    id,
    title,
    author,
    status,
    chapter,
  } = book;
  return (
    <div>
      <h1>
        Book
        {title}
      </h1>
      By
      {author}
      <p>
        {id}
        ,
        {status}
        ,
        {chapter}
      </p>
      <button type="button">Delete</button>
    </div>
  );
};

export default Book;
