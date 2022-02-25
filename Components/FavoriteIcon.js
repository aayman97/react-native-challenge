import { Text, Image, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const FavoriteIcon = ({
  diameterOfTheImage,
  width,
  height,
  item,
  favorites,
  removeFromFavorites,
}) => {
  return (
    <View
      style={{
        marginHorizontal: width * 0.02,
        width: diameterOfTheImage,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {item.imageAvailable ? (
        <Image
          source={{ uri: item.image.uri }}
          style={{
            width: diameterOfTheImage,
            height: diameterOfTheImage,
            resizeMode: "contain",
            borderRadius: diameterOfTheImage,
            transform: [
              {
                scale: 1.0,
              },
            ],
            alignSelf: "center",
            position: "relative",
          }}
        />
      ) : (
        <Image
          source={require("../assets/Images/avatar.png")}
          style={{
            width: diameterOfTheImage,
            height: diameterOfTheImage,
            resizeMode: "contain",
            borderRadius: diameterOfTheImage,
            transform: [
              {
                scale: 1.0,
              },
            ],
            alignSelf: "center",
            position: "relative",
          }}
        />
      )}
      {/* Close button */}
      <TouchableOpacity
        onPress={() => {
          removeFromFavorites(item);
        }}
        style={{
          position: "absolute",
          transform: [
            {
              translateY: -diameterOfTheImage / 1.8,
            },
            {
              translateX: diameterOfTheImage / 3,
            },
          ],
        }}
      >
        <View
          style={{
            width: width * 0.055,
            height: width * 0.055,
            borderRadius: width * 0.06,
            backgroundColor: "#989399",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name="close" size={15} color="white" />
        </View>
      </TouchableOpacity>

      {/* name of the contact */}
      <Text
        numberOfLines={1.0}
        ellipsizeMode={"tail"}
        style={{
          color: "white",
          lineHeight: 28,
        }}
      >
        {item.name}
      </Text>
    </View>
  );
};

// function mapStateToProps(state) {
//   return {
//     favorites: state,
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     removeFromFavorites: (item) =>
//       dispatch({ type: "REMOVE_FROM_FAVORITES", payload: item }),
//   };
// }
export default FavoriteIcon;
