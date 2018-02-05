//const INITIAL_STATE = {{name: "Matias", phone: "", shift: "Monday"}};
import _ from 'lodash';

const INITIAL_STATE = {name:'Matias',phone:'',shift:'Monday'};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_LIST':
      return {posts:action.payload};
    default:
      return state;
  }
};
