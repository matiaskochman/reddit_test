import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";

//import 'babel-polyfill';
import createSagaMiddleware from 'redux-saga';

//import reducers from './src/containers/redditPostsContainer/reducer.js';
import reducers from './src/reducer/reducers.js';
import rootSaga from './src/containers/redditPostsContainer/sagas.js';


//import apuestasSaga from './components/saga.js';
//import RedditPostsListContainer from './src/containers/redditPostsContainer/redditPostsListContainer.js';
import AppRouter from './src/AppRouter'

class App extends Component {

  render() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(rootSaga);

    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
