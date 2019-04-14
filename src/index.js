import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'; //the backend of our app
import rootReducer from './store/reducers/rootReducer'; //the object of multiple reducers
import { Provider } from 'react-redux'; //provides our store to any component in this project
import thunk from 'redux-thunk'; //Middleware for async logic and interacts with store
import { reduxFirestore, getFirestore } from 'redux-firestore'; //connection between redux and firestore
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'; //connection between react-redux-firebase
import fbConfig from './config/fbConfig'; //configuration of firebase

//creation of a store
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true })
  )
);
//waits untill store is loaded to see, if we are logged in or not to select the right layout
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
