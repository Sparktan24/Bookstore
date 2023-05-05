import Book from './Book';

const books = [
  {
    id: 1,
    title: 'Book1',
    author: 'author1',
    status: '10%',
    chapter: 'Some Chapter Book1',
  },
  {
    id: 2,
    title: 'Book2',
    author: 'author2',
    status: '15%',
    chapter: 'Some Chapter Book2',
  },
];

const BooksList = () => (
  <div>
    {books.map((book) => (
      <Book key={book.id} book={book} />
    ))}
  </div>
);

export default BooksList;
