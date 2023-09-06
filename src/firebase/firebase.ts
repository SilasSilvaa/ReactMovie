import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCBzexwVzDf6x6JrLBtbILGJCmPnJoP0FI",
    authDomain: "reactmovie-bea97.firebaseapp.com",
    databaseURL: "https://reactmovie-bea97-default-rtdb.firebaseio.com",
    projectId: "reactmovie-bea97",
    storageBucket: "reactmovie-bea97.appspot.com",
    messagingSenderId: "212966688292",
    appId: "1:212966688292:web:274922d6646a28ca08bab1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
