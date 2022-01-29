import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVveUsrWNy1raBjJdcACgNSOZN1wHa7sc",
    authDomain: "go-riders-8ed7d.firebaseapp.com",
    projectId: "go-riders-8ed7d",
    storageBucket: "go-riders-8ed7d.appspot.com",
    messagingSenderId: "260236269303",
    appId: "1:260236269303:web:df953e2e33afda6af9a5f2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();


export const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            const logInUser = {
                isSignIn: true,
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
            }
            // console.log(logInUser);
            return logInUser;

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
}

export const createNewUser = (name, email, password) => {
    return createUserWithEmailAndPassword(auth,name, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            const logInUser = {
                isSignIn: true,
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
            }
            // console.log(logInUser);
            return logInUser;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });

}



export const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const logInUser = {
                isSignIn: true,
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
            }
            // console.log(logInUser);
            return logInUser;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}
