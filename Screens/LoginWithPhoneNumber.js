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

const { width, height } = Dimensions.get("screen");

const LogInScreenWithPhoneNumber = () => {
  const [user, setUser] = useState({
    phoneNumber: "",
  });

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
        onPress={() => {}}
      >
        <Text
          style={{
            color: "#a29da3",
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          {" "}
          Log in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogInScreenWithPhoneNumber;
