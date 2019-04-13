const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

//vytvo�en� notifikace
const createNotification = (notification => {
  return admin.firestore().collection('notifications')
  .add(notification)
  .then(doc => console.log('Added notification', doc));
})
//log na vytvo�en� ko��ku
exports.basketCreated = functions.firestore
.document('baskets/{projectId}')
.onCreate(doc => {
  const basket = doc.data();
  const notification = {
    content: "created Basket",
    user: `${basket.authorFirstName} ${basket.authorLastName}`,
    ID: `${basket.authorId}`,
    time: admin.firestore.FieldValue.serverTimestamp()
  }

  return createNotification(notification);

})
//log na vytvo�en� usera
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
//log na update usera, nen� ohl�d�na zm�na emailu
exports.userUpdate = functions.firestore.document('users/{userId}')
.onUpdate((change, context) => {
    const updatedUser = change.after._fieldsProto;
    const beforeUser = change.before._fieldsProto;
    if(updatedUser === beforeUser){
      console.log('Nothing has changed');
      return null;
    }
    console.log(change.before._fieldsProto);
    const notification = {
      content: 'User was updated',
      user: `${updatedUser.name.stringValue} ${updatedUser.surname.stringValue}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification);
  })
//log na delete usera
exports.userDeleted = functions.auth.user()
.onDelete(user => {
  return admin.firestore().collection('users')
  .doc(user.uid).get().then(doc => {
    const deletedUser = doc.data();
    const notification = {
      content: 'User was deleted',
      user: `${deletedUser.name} ${deletedUser.surname} - ${user.uid}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification);
  })
})
