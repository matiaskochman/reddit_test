import { delay } from 'redux-saga';
import { put, takeEvery, all, call,takeLatest  } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPostsAsync(action) {
  const reddit_api = 'https://api.reddit.com/r/pics/new.json';

  try{
    let reddit_posts = yield call(axios.get,reddit_api);
    yield put(
        {
            type:'FETCH_POSTS_LIST',
            payload:reddit_posts.data.data.children
        }
    )
  } catch (e){
    console.error(e);
  }
}


function* watchFetchFechasListAsync() {
  yield takeLatest('POSTS_FETCH_SAGA', fetchPostsAsync)
}

export default function* postsSaga() {
  yield all([
    watchFetchFechasListAsync()
  ])
}
