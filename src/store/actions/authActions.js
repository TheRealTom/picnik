// // Tom
//Login
export const loggIn = (authentization) => {
  return (dispatch, getState, {getFirebase}) => {
    const fire = getFirebase();

    fire.auth().signInWithEmailAndPassword(
      authentization.email,
      authentization.password
    ).then(() => {
      dispatch({ type: 'SUCCESSFUL_LOGIN' });
    }).catch((err) => {
      dispatch({ type: 'FAILED_LOGIN', err });
    });
  }
}
//log out
export const signOut = () => {
  return(dispatch, getState, {getFirebase}) => {
    const fire = getFirebase();

    fire.auth().signOut().then(() => {
      dispatch({ type: 'SUCCESSFUL_SIGNOUT' });
  });
  }
}
//Sign in
export const signIn = (userParameters) => {
  return(dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      userParameters.email,
      userParameters.password
    ).then((resp) => {
      return firestore.collection('users').doc(resp.user.uid).set({
        name: userParameters.name,
        surname: userParameters.surname,
        tel: userParameters.tel,
        date: userParameters.date,
        sex: userParameters.sex
      })
    }).then(() => {
      dispatch({ type: 'SUCCESSFUL_SIGNIN' });
  }).catch((err) => {
    dispatch({ type: 'FAILED_SIGNIN', err });
    });
  }
}
//Reset of password
export const forgotPass = (userEmail) => {
  return(dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().sendPasswordResetEmail(
      userEmail.forgotPass
    ).then(() => {
      dispatch({ type: 'SUCCESSFUL_SENDEMAIL'});
    }).catch((err) => {
      dispatch({ type: 'FAILED_SENDEMAIL' });
    });
  }
}
//change of password
//reauthentification problem, because of firebase
export const renewPassword = (newPass) => {
  return(dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    var user = firebase.auth().currentUser;
    user.updatePassword(
      newPass.newPass
    ).then(() => {
      dispatch({ type: 'SUCCESSFUL_UPDATE_PASSWORD'})
    }).catch((err) => {
      dispatch({ type: 'FAILED_UPDATE_PASSWORD' })
    });
  }
}
//Delete user
//reauthentification problem, because of firebase
export const deleteUser = (states) => {
  return(dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    var user = firebase.auth().currentUser;
    user.delete().then(function() {
      firestore.collection('users').doc(user.uid).delete();
      dispatch({ type: 'SUCCESSFUL_DELETE'})
    }).catch((err) => {
      dispatch({ type: 'FAILED_DELETE_REQUEST' })
    });
  }
}
//Update user
//reauthentification problem, because of firebase
export const updateUser = (newInformation) => {
  return(dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;
    user.updateEmail(
      newInformation.newEmail
    ).then(() => {
      console.log();
      return firestore.collection('users').doc(user.uid).update({
        name: newInformation.newName,
        surname: newInformation.newSurname,
        tel: newInformation.newTel,
        date: newInformation.newDate
      })
    }).then(() => {
      dispatch({ type: 'SUCCESSFUL_UPDATE_PROFILE'})
    }).catch((err) => {
      dispatch({ type: 'FAILED_UPDATE_PROFILE' })
    });
  }
}
