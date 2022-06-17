import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const updateStatus = useSelector((state) => state.categories);
  return (
    <div className="category-container">
      {(updateStatus).map((status) => <h2 key={status}>{status}</h2>)}
      <button type="button" className="category-btn" onClick={() => dispatch(checkStatus())}>Check status</button>
    </div>
  );
};

export default Categories;
