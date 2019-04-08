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
    case 'SUCCESSFUL_UPDATE_PASSWORD':
      console.log('Updating password successeded');
      return {
        ...state,
        authError: null
      };
    case 'FAILED_UPDATE_PASSWORD':
      console.log('Updating password failed');
      return {
        ...state,
        authError: 'Something went wrong'
      };
    case 'SUCCESSFUL_DELETE':
      console.log('Deleting account successeded');
      return {
        ...state,
        authError: null
      };
    case 'FAILED_DELETE_REQUEST':
      console.log('Deleting account failed');
      return {
        ...state,
        authError: 'Your account has not been deleted'
      };
    case 'SUCCESSFUL_UPDATE_PROFILE':
      console.log('Your account has been updated');
      return {
        ...state,
        authError: null
      };
    case 'FAILED_UPDATE_PROFILE':
      console.log('Updating account failed');
      return {
        ...state,
        authError: 'Update was not succesful'
      };
    default:
      return state;
  }
}

export default authReducer
