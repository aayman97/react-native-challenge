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

const VerifyCode = async (setUser, user, navigation) => {
  await user.verification
    .confirm(user.verificationCode)
    .then((user) => {
      setUser({
        ...user,
        verified: true,
      });
      navigation.navigate("Phone Contacts");
    })
    .catch((err) => {
      setUser({
        ...user,
        verified: false,
        verficationError: err.message,
      });
    });
};

const CreateAccountWithEmail = (user, setUser, navigation) => {
  return createUserWithEmailAndPassword(firebaseAuth, user.email, user.password)
    .then((userCredential) => {
      // Signed in
      // const user = userCredential.user;

      setUser({
        ...user,
        error: "",
      });

      navigation.goBack();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      setUser({
        ...user,
        error: error.code,
      });
      // ..
    });
};

const SignInWithEmail = (user, setUser, navigation) => {
  return signInWithEmailAndPassword(firebaseAuth, user.email, user.password)
    .then((userCredential) => {
      // Signed in
      //   user = userCredential.user;
      // console.log(userCredential.user);
      // ...
      setUser({
        ...user,
        error: "",
        SignedIn: true,
      });
      navigation.navigate("Phone Contacts");
    })
    .catch((e) => {
      const errorCode = e.code;
      const errorMessage = e.message;

      setUser({
        ...user,
        error: e.code,
      });
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
