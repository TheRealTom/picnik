const initState = {
  authError: null
}

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
    default:
      return state;
  }
}

export default authReducer
