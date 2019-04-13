const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const createInfo = (info => {
    return admin.firestore().collection('infos')
    .add(info)
    .then(doc => console.log('info added', doc))
})

exports.newBasket = functions.firestore
    .document('projects/{projectId')
    .onCreate(doc => {

        const baskets = doc.data();
        const info = {
            content: 'Added a new basket',
            user: '${baskets.authorFirstName} ${baskets.authorLastName}',
            time: admin.firestore.FieldValue.serverTimestampTimestamp()
        }

        return createInfo(info);

})