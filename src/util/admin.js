const admin = require('firebase-admin');

// const firebase = require('firebase')
const serviceAccount = require('../waterleakage-f6142-firebase-adminsdk-39dog-91577176e6.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'waterleakage-f6142.appspot.com',
});

const db = admin.firestore();
module.exports = { admin, db };


