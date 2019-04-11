import authReducer from './authReducer';
import basketReducer from './basketReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
<<<<<<< HEAD
import { firestoreReducer } from 'react-redux-firebase';
//kombinace v�ce reducer� pro celkov� propojen�
=======
import { firestoreReducer } from 'redux-firestore';
>>>>>>> baskets

const rootReducer = combineReducers({
  auth: authReducer,
  project: basketReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
