import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const LoginScreen = ({ navigation }) => {
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
      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        {" "}
        Choose the sign in method
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width,
          marginTop: height * 0.025,
        }}
      >
        <TouchableOpacity
          style={{
            width: width * 0.3,
            height: width * 0.3,
            borderRadius: 10,
            backgroundColor: "#4f4a50",
            alignItems: "center",
            justifyContent: "center",
            marginTop: height * 0.04,
            shadowOpacity: 0.4,
            shadowRadius: 10,
          }}
          onPress={() => navigation.navigate("Sign In with Email")}
        >
          <MaterialIcons name="email" size={60} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: width * 0.3,
            height: width * 0.3,
            borderRadius: 10,
            backgroundColor: "#4f4a50",
            alignItems: "center",
            justifyContent: "center",
            marginTop: height * 0.04,
            shadowOpacity: 0.4,
            shadowRadius: 10,
          }}
          onPress={() => navigation.navigate("Sign In with Phone")}
        >
          <MaterialIcons name="phone" size={60} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
