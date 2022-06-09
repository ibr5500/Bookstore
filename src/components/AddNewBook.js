import React from 'react';

const AddNewBook = () => (
  <div className="form-container">
    <h3 className="form-header">Add New Book</h3>
    <form className="form">
      <input className="title" name="title" type="text" placeholder="Book title" required />
      <input className="author" name="author" type="text" placeholder="Book author" required />
      <button className="btn" type="button">Add Book</button>
    </form>
  </div>
);

export default AddNewBook;
