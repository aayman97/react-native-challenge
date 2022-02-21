import { FlatList, StyleSheet, View, Image, Text } from "react-native";
import { connect } from "react-redux";
import FavoriteIcon from "./FavoriteIcon";

const FavoritesContainer = ({
  width,
  height,
  favorites,
  removeFromFavorites,
}) => {
  var diameterOfTheImage = height * 0.075;

  return (
    <View
      style={{
        width,
        height: height * 0.15,
      }}
    >
      <FlatList
        data={favorites}
        keyExtractor={(_, i) => i}
        horizontal
        renderItem={({ item, index }) => {
          return (
            <FavoriteIcon
              width={width}
              height={height}
              diameterOfTheImage={diameterOfTheImage}
              item={item}
              removeFromFavorites={removeFromFavorites}
            />
          );
        }}
      />
    </View>
  );
};

function mapStateToProps(state) {
  return {
    favorites: state,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addToFavorites: (item) =>
      dispatch({ type: "ADD_TO_FAVORITES", payload: item }),
    removeFromFavorites: (item) =>
      dispatch({ type: "REMOVE_FROM_FAVORITES", payload: item }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
