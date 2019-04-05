//p�ihla�ov�n�
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
//odhla�ov�n�
export const signOut = () => {
  return(dispatch, getState, {getFirebase}) => {
    const fire = getFirebase();

    fire.auth().signOut().then(() => {
      dispatch({ type: 'SUCCESSFUL_SIGNOUT' });
  });
  }
}
//registrace
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
        date: userParameters.date
      })
    }).then(() => {
      dispatch({ type: 'SUCCESSFUL_SIGNIN' });
  }).catch((err) => {
    dispatch({ type: 'FAILED_SIGNIN', err });
    });
  }
}
//reset hesla pomoc� mailu
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
