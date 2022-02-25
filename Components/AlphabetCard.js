import { Text, View } from "react-native";

const AlphabetCard = ({ letter, width, height }) => {
  return (
    <View
      style={{
        width,
        height: height * 0.04,
        backgroundColor: "#3f3a40",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {letter}
      </Text>
    </View>
  );
};

export default AlphabetCard;
