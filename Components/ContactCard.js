import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { connect } from "react-redux";

const ContactCard = ({
  contactDetails,
  width,
  height,
  favorites,
  addToFavorites,
  removeFromFavorites,
}) => {
  const [selected, isSelected] = useState(false);

  useEffect(() => {
    if (selected) {
      addToFavorites(contactDetails);
    } else {
      removeFromFavorites(contactDetails);
    }
  }, [selected]);

  useEffect(() => {
    if (favorites.indexOf(contactDetails) === -1) {
      isSelected(false);
    } else {
      isSelected(true);
    }
  }, [favorites]);

  return (
    <View
      style={{
        width: width,
        height: height * 0.072,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {contactDetails.imageAvailable ? (
        <Image
          source={{ uri: contactDetails.image.uri }}
          style={{
            width: height * 0.052,
            height: height * 0.052,
            resizeMode: "contain",
            borderRadius: height * 0.052,
            transform: [
              {
                scale: 1.0,
              },
            ],
            alignSelf: "center",
          }}
        />
      ) : (
        <Image
          source={require("../assets/Images/avatar.png")}
          style={{
            width: height * 0.052,
            height: height * 0.052,
            resizeMode: "contain",
            borderRadius: height * 0.052,
            transform: [
              {
                scale: 1.0,
              },
            ],
            alignSelf: "center",
          }}
        />
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: width * 0.8,
          borderBottomWidth: 2,
          borderColor: "#2d282e",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {contactDetails.name}
        </Text>

        <TouchableOpacity
          onPress={() => {
            isSelected(!selected);
          }}
        >
          {selected ? (
            <View
              style={{
                height: height * 0.035,
                width: height * 0.035,
                borderRadius: "100%",
                borderWidth: 2,
                borderColor: "transparent",
                backgroundColor: "#1a8fcb",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome5 name="check" size={15} color="#252026" />
            </View>
          ) : (
            <View
              style={{
                height: height * 0.035,
                width: height * 0.035,
                borderRadius: "100%",
                borderWidth: 2,
                borderColor: "#2d282e",
              }}
            />
          )}
        </TouchableOpacity>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactCard);
