const initState = {}
// // Libor
//error messiging via basketReducer
const basketReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_BASKET':
      console.log('created project ok');
      return state;
    case 'CREATE_BASKET_ERROR':
      console.log('create basket error');
      return state;
    default:
      return state;
  }
}

export default basketReducer
