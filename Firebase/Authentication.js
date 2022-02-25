import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPhoneNumber,
} from "firebase/auth";
import { firebaseAuth } from "./Config";

firebaseAuth.languageCode = "it";

const SignInWithPhoneNo = async (recaptchaVerifier, setUser, user) => {
  try {
    const verification = await signInWithPhoneNumber(
      firebaseAuth,
      `+2${user.phoneNumber}`,
      recaptchaVerifier.current
    );
    setUser({
      ...user,
      verification: verification,
      error: false,
      errMessage: "Verification code has been sent to your phone.",
    });
  } catch (err) {
    setUser({
      ...user,
      error: true,
      errMessage: err.message,
    });
  }
  return;
};

const VerifyCode = async (setUser, user) => {
  await user.verification
    .confirm(user.verificationCode)
    .then((user) => {
      setUser({
        ...user,
        verified: true,
      });
    })
    .catch((err) => {
      setUser({
        ...user,
        verified: false,
        verficationError: err.message,
      });
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

export {
  SignInWithPhoneNo,
  CreateAccountWithEmail,
  SignInWithEmail,
  SignOut,
  VerifyCode,
};
