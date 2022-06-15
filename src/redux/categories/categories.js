const CHECK_STATUS = 'BOOKSTORE/redux/CHECK_STATUS';

// const categories = [];

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categoryRedeucer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return ['Under construction'];
    default:
      return state;
  }
};

export default categoryRedeucer;
