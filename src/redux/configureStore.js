import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import bookReducer from './books/books';
import categoryRedeucer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoryRedeucer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
