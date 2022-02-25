import { useState, useEffect } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  CreateAccountWithEmail,
  SignInWithEmail,
  SignOut,
} from "../Firebase/Authentication";

const { width, height } = Dimensions.get("screen");

const CreateAccountScreenWithEmail = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <View
      style={{
        width,
        height,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#252026",
      }}
    >
      {/* Email Search Input */}
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
        <MaterialIcons name="email" size={30} color="#a29da3" />

        <TextInput
          onChangeText={(e) =>
            setUser({
              ...user,
              email: e,
            })
          }
          placeholder="Email"
          placeholderTextColor={"#a29da3"}
          style={{
            color: "#a29da3",
            fontWeight: "700",
            fontSize: 20,
            width: width * 0.77,
            height: "100%",
          }}
        />
      </View>

      {/* Password Search Input */}

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
          marginTop: height * 0.02,
          shadowOpacity: 0.5,
        }}
      >
        <MaterialIcons name="lock" size={30} color="#a29da3" />

        <TextInput
          onChangeText={(e) =>
            setUser({
              ...user,
              password: e,
            })
          }
          placeholder="Password"
          placeholderTextColor={"#a29da3"}
          style={{
            color: "#a29da3",
            fontWeight: "700",
            fontSize: 20,
            width: width * 0.77,
            height: "100%",
          }}
        />
      </View>

      {/* Log In Button */}

      <TouchableOpacity
        style={{
          width: width * 0.5,
          height: height * 0.08,
          borderRadius: 10,
          backgroundColor: "#4f4a50",
          alignItems: "center",
          justifyContent: "center",
          marginTop: height * 0.04,
          shadowOpacity: 0.4,
          shadowRadius: 10,
        }}
        onPress={() => {
          console.log(CreateAccountWithEmail(user.email, user.password));
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
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccountScreenWithEmail;