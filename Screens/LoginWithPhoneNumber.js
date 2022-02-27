import React, { useState } from "react";
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SignInWithPhoneNo, VerifyCode } from "../Firebase/Authentication";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../Firebase/Config";

const { width, height } = Dimensions.get("screen");

const LogInScreenWithPhoneNumber = ({ navigation }) => {
  const [user, setUser] = useState({
    phoneNumber: "",
    verification: null,
    verificationCode: null,
    error: false,
    errMessage: "",
    verified: false,
    verficationError: "",
  });

  const recaptchaVerifier = React.useRef(null);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={"padding"}
        style={{
          width,
          height,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#252026",
        }}
      >
        {/* Recaptcha Modal */}

        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        ></FirebaseRecaptchaVerifierModal>

        {/* Phone Number Input */}

        <View
          style={{
            width: width * 0.94,
            height: height * 0.08,
            borderRadius: 10,
            backgroundColor: "#4f4a50",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 15,
            shadowOpacity: 0.5,
          }}
        >
          <MaterialIcons name="phone" size={30} color="#a29da3" />

          <TextInput
            onChangeText={(e) =>
              setUser({
                ...user,
                phoneNumber: e,
              })
            }
            placeholder="Phone Number"
            placeholderTextColor={"#a29da3"}
            style={{
              color: "#a29da3",
              fontWeight: "700",
              fontSize: 20,
              width: width * 0.77,
              height: "100%",
            }}
            keyboardType="number-pad"
            maxLength={11}
          />
        </View>

        {/* 
            sign in button
            */}
        <TouchableOpacity
          style={{
            width: width * 0.65,
            height: height * 0.08,
            borderRadius: 10,
            backgroundColor: "#4f4a50",
            alignItems: "center",
            justifyContent: "center",
            marginTop: height * 0.04,
            shadowOpacity: 0.4,
            shadowRadius: 10,
          }}
          onPress={() => SignInWithPhoneNo(recaptchaVerifier, setUser, user)}
        >
          <Text
            style={{
              color: "#a29da3",
              fontWeight: "700",
              fontSize: 20,
            }}
          >
            {" "}
            Send Verification Code
          </Text>
        </TouchableOpacity>

        {/* Verification code input */}
        <View
          style={{
            width: width * 0.94,
            height: height * 0.08,
            borderRadius: 10,
            backgroundColor: "#4f4a50",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 15,
            shadowOpacity: 0.5,
            marginTop: height * 0.04,
          }}
        >
          <MaterialIcons name="sms" size={30} color="#a29da3" />

          <TextInput
            onChangeText={(e) =>
              setUser({
                ...user,
                verificationCode: e,
              })
            }
            placeholder="Verification Code"
            placeholderTextColor={"#a29da3"}
            style={{
              color: "#a29da3",
              fontWeight: "700",
              fontSize: 20,
              width: width * 0.77,
              height: "100%",
            }}
            keyboardType="number-pad"
            maxLength={6}
          />
        </View>

        {/* verify code button */}
        <TouchableOpacity
          disabled={!user.verification}
          style={{
            width: width * 0.5,
            height: height * 0.08,
            borderRadius: 10,
            backgroundColor: !user.verification ? "gray" : "#4f4a50",
            alignItems: "center",
            justifyContent: "center",
            marginTop: height * 0.04,
            shadowOpacity: 0.4,
            shadowRadius: 10,
          }}
          onPress={() => {
            if (user.verification) {
              VerifyCode(setUser, user, navigation);
            }
          }}
        >
          <Text
            style={{
              color: "#a29da3",
              fontWeight: "700",
              fontSize: 20,
            }}
          >
            {" "}
            Verify Code
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LogInScreenWithPhoneNumber;
