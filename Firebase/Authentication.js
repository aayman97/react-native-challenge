import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { firebaseAuth } from "./Config";

firebaseAuth.languageCode = "it";
const appVerifier = window.recaptchaVerifier;

const SignInWithPhoneNo = (phoneNumber) => {
  return signInWithPhoneNumber(firebaseAuth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    })
    .catch((error) => {
      // Error; SMS not sent
      // ...
    });
};

const CreateAccountWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Account Created : ", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorMessage);
      // ..
    });
};

const SignInWithEmail = ({ email, password }) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      // Signed in
      //   user = userCredential.user;
      console.log(userCredential.user);

      // ...
    })
    .catch((e) => {
      const errorCode = e.code;
      const errorMessage = e.message;

      console.log(errorMessage);
    });
};

const SignOut = () => {
  return signOut(firebaseAuth)
    .then(() => {
      console.log("User is signed out");
    })
    .catch((error) => {
      console.log("error in signed in");
    });
};

export { CreateAccountWithEmail, SignInWithEmail, SignOut };
