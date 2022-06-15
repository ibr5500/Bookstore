const ADD_BOOK = 'BOOKSTORE/redux/ADD_BOOK';
const REMOVE_BOOK = 'BOOKSTORE/redux/REMOVE_BOOK';

const books = [
  {
    id: 1,
    title: 'Clean Code',
    author: 'Robert Cecil Martin',
  },
  {
    id: 2,
    title: 'The Book of Why',
    author: 'Judea Pearl',
  },
];

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const bookReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state,
        {
          id: books.length + 1,
          ...action.payload,
        }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
