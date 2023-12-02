import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBvwAq43DqHvq5vH-y6H84H_3_dgIoeegk",
    authDomain: "crown-db-2f2b6.firebaseapp.com",
    projectId: "crown-db-2f2b6",
    storageBucket: "crown-db-2f2b6.appspot.com",
    messagingSenderId: "77716662203",
    appId: "1:77716662203:web:73084646820e380528869e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUsertDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef)

    // if user data does not exists
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        // create / set the document with the data from userAtuh in my collection
        try {
            await  setDoc(userDocRef, {
                displayName,
                email, 
                createAt
            })
        } catch (error) {
            console.log('error created', error);
        }
    }

    return userDocRef
}