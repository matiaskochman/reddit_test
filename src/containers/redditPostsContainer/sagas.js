import { delay } from 'redux-saga';
import { put, takeEvery, all, call,takeLatest  } from 'redux-saga/effects';
import axios from 'axios';


function* fetchPostsAsync(action) {

  const reddit_api = 'https://api.reddit.com/r/pics/new.json';
  let reddit_posts = yield call(axios.get,reddit_api);
  try{

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


// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchFetchFechasListAsync() {
  yield takeLatest('POSTS_FETCH_SAGA', fetchPostsAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* postsSaga() {
  yield all([
    watchFetchFechasListAsync()
  ])
}
