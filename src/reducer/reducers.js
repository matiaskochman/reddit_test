import { combineReducers } from 'redux';

import RedditPostsReducer from '../containers/redditPostsContainer/reducer.js';
import ItemReducer from '../containers/ItemContainer/reducer.js';

export default combineReducers({
  RedditPostsReducer,
  ItemReducer
});
