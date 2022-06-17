import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImSpinner8 } from 'react-icons/im';
import { fetchData, removeBook } from '../redux/books/books';

const Book = () => {
  const displayBooks = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    displayBooks.map((elem, index) => (
      <div className="book" key={elem.id}>
        <div className="book-content">
          <h5 className="category">{ elem.category }</h5>
          <h2 className="book-title">{ elem.title }</h2>
          <p className="book-author">{ elem.author }</p>
          <button type="button" className="comments">Comments</button>
          <button type="button" className="remove-btn" onClick={() => { dispatch(removeBook(elem.id)); }}>Remove</button>
          <button type="button" className="edits">Edit</button>
        </div>
        <div className="reading-status">
          <ImSpinner8 className="loading" />
          <div className="status-content">
            <h3>
              {index + Math.floor(Math.random() * 80) }
              %
            </h3>
            <p>completed</p>
          </div>
        </div>
        <div className="update">
          <h4>CURRENT CHAPTER</h4>
          <h2>
            Chapter
            {index + Math.floor(Math.random() * 10)}
          </h2>
          <button type="button">Update Progress</button>
        </div>
      </div>
    )));
};

export default Book;
