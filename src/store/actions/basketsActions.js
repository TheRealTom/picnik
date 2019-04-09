export const createBasket = (project) => {
    return (dispatch, getState) => {
        //vytvořit async volání databáze
        dispatch({type: 'CREATE_BASKET', project});
    }
};