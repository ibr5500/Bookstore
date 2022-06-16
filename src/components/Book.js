import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, removeBook } from '../redux/books/books';

const Book = () => {
  const displayBooks = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    displayBooks.map((elem) => (
      <div className="book" key={elem.id}>
        <h5 className="category">{ elem.category }</h5>
        <h2 className="book-title">{ elem.title }</h2>
        <p className="book-author">{ elem.author }</p>
        <button type="button" className="comments">Comments</button>
        <button type="button" className="remove-btn" onClick={() => { dispatch(removeBook(elem.id)); }}>Remove</button>
        <button type="button" className="edits">Edit</button>
      </div>
    )));
};

export default Book;
