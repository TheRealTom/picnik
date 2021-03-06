import authReducer from './authReducer';
import basketReducer from './basketReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
//combines reducers to one object - Tom/Libor 
const rootReducer = combineReducers({
  auth: authReducer,
  project: basketReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
