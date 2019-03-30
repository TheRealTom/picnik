import authReducer from './authReducer';
import basketReducer from './basketReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  project: basketReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;
