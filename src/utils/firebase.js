// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-wpahhbKrlkvH6yw3_dOklP22OyVMkwg",
    authDomain: "techitrons-651ab.firebaseapp.com",
    projectId: "techitrons-651ab",
    storageBucket: "techitrons-651ab.appspot.com",
    messagingSenderId: "589276904495",
    appId: "1:589276904495:web:7af439f56f486c71d59ada"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const storage = getStorage(app);
const db = getDatabase(app);
export { storage, db };

export const signOutAuth = () => {
    return signOut(auth)
}

export const onAuthStateChangedListner = (callback) => {
    return onAuthStateChanged(auth, callback)
}

export function GetSortOrder(prop) {
    return function (a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}