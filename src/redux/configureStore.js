import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import bookReducer from './books/books';
import categoryRedeucer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoryRedeucer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
