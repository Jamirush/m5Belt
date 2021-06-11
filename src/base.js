  
import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAVS1Ik_UkSWYd6iEI_1bErPHIowLkUXhU",
    authDomain: "vamp-tools-app.firebaseapp.com",
    databaseURL: "https://vamp-tools-app-default-rtdb.firebaseio.com",
    projectId: "vamp-tools-app",
})

// const base = Rebase.createClass(firebaseApp.database())
const db = firebase.database(firebaseApp);
const base = Rebase.createClass(db);
export { firebaseApp }
export default base