const CHECK_STATUS = 'CHECK_STATUS';

const categories = [];

export const checkingStatus = () => ({
  type: CHECK_STATUS,
});

const categoryRedeucer = (state = categories, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoryRedeucer;
