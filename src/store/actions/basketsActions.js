export const createBasket = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        //vytvořit async volání databáze
        const firestore = getFirestore();
        firestore.collection('baskets').add({
            ...project,
            authorFirstName: 'Jmeno',
            authorLastName: 'Prijemni',
            authorId: 12345,
            createdTime: new Date()    
        }).then(() => {
            dispatch({type: 'CREATE_BASKET', project});
        }).catch((err) => {
            dispatch({ type: 'CREATE_BASKET_ERROR', err });
        })  
    }
};