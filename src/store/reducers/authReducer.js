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
      }
    case 'SUCCESSFUL_LOGIN':
      console.log('Logged in');
      return {
        ...state,
        authError: null
      }
    case 'SUCCESSFUL_SIGNOUT':
      console.log('Signed out');
      return state;
      
    default:
      return state;
  }
}

export default authReducer
