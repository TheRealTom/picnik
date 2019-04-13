const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


// Create and Deploy Your First Cloud Functions
//https://firebase.google.com/docs/functions/write-firebase-functions

const createNotification = (notification => {
  return admin.firestore().collection('notifications')
  .add(notification)
  .then(doc => console.log('Added notification', doc));
})
//log na vytvoøení košíku
exports.basketCreated = functions.firestore
.document('baskets/{projectId}')
.onCreate(doc => {
  const basket = doc.data();
  const notification = {
    content: "Basket was created",
    user: `${basket.authorFirstName} ${basket.authorLastName}`,
    time: admin.firestore.FieldValue.serverTimestamp()
  }

  return createNotification(notification);
})
//log na vytvoøení usera
exports.userCreated = functions.auth.user()
.onCreate(user => {
  return admin.firestore().collection('users')
  .doc(user.uid).get().then(doc => {
    const newUser = doc.data();
    const notification = {
      content: "User was created",
      user: `${newUser.name} ${newUser.surname}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification);
  })
})
