const initState = {
  authError: null
}
//reducery na vrácení stavu, slouží hlavnì jako takový error messaging
const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'FAILED_LOGIN':
      console.log('Login failed');
      return {
        ...state,
        authError: 'Login has failed'
      };
    case 'SUCCESSFUL_LOGIN':
      console.log('Logged in');
      return {
        ...state,
        authError: null
      };
    case 'SUCCESSFUL_SIGNOUT':
      console.log('Signed out');
      return state;

    case 'SUCCESSFUL_SIGNIN':
      console.log('Signed In');
      return {
        ...state,
        authError: null
      };
    case 'FAILED_SIGNIN':
      console.log('SignedIn failed');
      return {
        ...state,
        authError: action.err.message
      };
    case 'SUCCESSFUL_SENDEMAIL':
      console.log('Sended password');
      return {
        ...state,
        authError: null
      };
    case 'FAILED_SENDEMAIL':
      console.log('Sending password failed');
      return {
        ...state,
        authError: "This email does not exist. Is it really your email address?"
      };
    default:
      return state;
  }
}

export default authReducer
