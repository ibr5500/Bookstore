import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddNewBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '' || author === '') return;
    dispatch(addBook({ id: uuidv4(), title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form-container">
      <h3 className="form-header">Add New Book</h3>
      <form className="form">
        <input
          className="title"
          name="title"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="author"
          name="author"
          type="text"
          placeholder="Book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button
          className="btn"
          type="submit"
          onClick={handleSubmit}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddNewBook;
