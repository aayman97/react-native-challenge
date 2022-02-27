import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ContactCard from "../Components/ContactCard";
import { useDeviceContacts } from "../hooks/useDeviceContacts";
import { Feather } from "@expo/vector-icons";
import FavoritesContainer from "../Components/FavoritesContainer";
import { connect } from "react-redux";
import { useCallback, useState, useEffect } from "react";
import ContactsList from "../Components/ContactsList";

const { width, height } = Dimensions.get("screen");

const ContactsScreen = ({ favorites }) => {
  const [searchInput, setSearchInput] = useState("");
  const contacts = useDeviceContacts();

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  const renderItem = (contact) => (
    <ContactCard
      key={contact.index}
      contactDetails={contact.item}
      width={width}
      height={height}
    />
  );

  return (
    <View
      style={{
        width,
        height,
        backgroundColor: "#252026",
      }}
    >
      {contacts.status === "success" ? (
        <>
          <View
            style={{
              width,
              height: height * 0.2,
              backgroundColor: "#3c373d",
              alignItems: "center",
            }}
          >
            {/* Add paricpants , cancel and next button*/}
            <View
              style={{
                width,
                height: height * 0.12,

                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                paddingTop: height * 0.05,
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    color: "#244c61",
                    fontSize: 20,
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>

              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "600",
                    letterSpacing: 1,
                  }}
                >
                  Add Participants
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 14,
                    lineHeight: 25,
                  }}
                >
                  {favorites.length} / {contacts.data.length}
                </Text>
              </View>

              <TouchableOpacity>
                <Text
                  style={{
                    color: "#244c61",
                    fontSize: 20,
                  }}
                >
                  Next
                </Text>
              </TouchableOpacity>
            </View>

            {/* Search Input */}

            <View
              style={{
                width: width * 0.96,
                height: height * 0.05,
                borderRadius: 10,
                backgroundColor: "#4f4a50",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <Feather name="search" size={25} color="#a29da3" />

              <TextInput
                onChangeText={(e) => setSearchInput(e)}
                placeholder="Search"
                placeholderTextColor={"#a29da3"}
                style={{
                  color: "#a29da3",
                  fontWeight: "700",
                  fontSize: 20,
                  width: width * 0.83,
                  height: "100%",
                }}
              />
            </View>
          </View>
          {/*favorites container */}

          <FavoritesContainer width={width} height={height} />

          {/* Contacts */}

          {/* <ContactsList
            contacts={contacts}
            searchInput={searchInput}
            width={width}
            height={height}
          /> */}
          <FlatList
            getItemLayout={(data, index) => ({
              length: height * 0.072,
              offset: height * 0.072 * index,
              index,
            })}
            data={contacts.data
              .filter(
                (item) =>
                  String(item.name)
                    .substring(0, searchInput.length)
                    .toLowerCase() === searchInput.toLowerCase()
              )
              .sort(function (a, b) {
                if (a.firstName < b.firstName) {
                  return -1;
                }
                if (a.firstName > b.firstName) {
                  return 1;
                }
                return 0;
              })}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
          />
        </>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator color="white" size={"large"} />
        </View>
      )}
    </View>
  );
};

function mapStateToProps(state) {
  return {
    favorites: state,
  };
}

export default connect(mapStateToProps)(ContactsScreen);
