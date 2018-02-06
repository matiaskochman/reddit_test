const INITIAL_STATE = {url:''};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ITEM_URL':
      return {url:action.payload};
    default:
      return state;
  }
};
