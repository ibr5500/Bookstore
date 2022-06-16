import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddNewBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.title === '' || book.author === '') return;
    dispatch(addBook({ ...book, item_id: uuidv4() }));
    setBook({
      title: '',
      author: '',
      category: '',
    });
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
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          required
        />
        <input
          className="author"
          name="author"
          type="text"
          placeholder="Book author"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          required
        />
        <select
          className="category"
          onChange={(e) => setBook({ ...book, category: e.target.value })}
          required
        >
          <option value="">Category</option>
          <option value="adventure">Adventure</option>
          <option value="computer science">Computer Science</option>
          <option value="fiction">Fiction</option>
          <option value="history">History</option>
          <option value="science">Science</option>
          <option value="other">Other</option>
        </select>
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
