export const loggIn = (autentization) => {
  return(dispatch, getState, {getFirebase}) => {
    const fire = getFirebase();

    fire.auth().signInWithEmailAndPassword(
      autentization.email,
      autentization.password
    ).then(() => {
      dispatch({ type: 'SUCCESSFUL_LOGIN'});
    }).catch((err) => {
      dispatch({ type: 'FAILED_LOGIN', err});
    });
  }
}
