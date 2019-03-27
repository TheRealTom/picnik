const initState = {
  authError: null
}

const authReducer = (state = initState, action) =>{
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
    default:
      return state;  
  }
}

export default authReducer
