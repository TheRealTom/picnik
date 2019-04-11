export const createBasket = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        //vytvořit async volání databáze
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorID = getState().firebase.auth.uid;
        firestore.collection('baskets').add({
            ...project,
            authorFirstName: profile.name,
            authorLastName: profile.surname,
            authorId: authorID,
            createdTime: new Date()    
        }).then(() => {
            dispatch({ type: 'CREATE_BASKET' });
        }).catch((err) => {
            dispatch({ type: 'CREATE_BASKET_ERROR', err });
        })  
    }
};