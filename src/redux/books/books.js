import axios from 'axios';

const ADD_BOOK = 'BOOKSTORE/redux/ADD_BOOK';
const REMOVE_BOOK = 'BOOKSTORE/redux/REMOVE_BOOK';
const DISPLAY_BOOKS = 'BOOKSTORE/redux/DISPLAY_BOOKS';

const booksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vMAw0MI9Qua5Trt8rtt2/books';
const books = []; // initialState

export const addBook = (book) => async (dispatch) => {
  await axios.post(`${booksURL}`, book);
  return dispatch({ type: ADD_BOOK, book });
};

export const removeBook = (id) => async (dispatch) => {
  await axios.delete(`${booksURL}/${id}`);
  return dispatch({ type: REMOVE_BOOK, id });
};

export const fetchData = () => async (dispatch) => {
  const res = await axios.get(`${booksURL}`);
  return dispatch({ type: DISPLAY_BOOKS, payload: res.data });
};

const bookReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, { ...action.book }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case DISPLAY_BOOKS:
      return Object.keys(action.payload).map((item) => ({ ...action.payload[item][0], id: item }));
    default:
      return state;
  }
};

export default bookReducer;
