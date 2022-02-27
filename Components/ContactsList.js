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
import { ContactCard } from "./ContactCard";

const ContactsList = ({ contacts, searchInput, width, height }) => {
  return (
    <ScrollView>
      {contacts.data
        .filter(
          (item) =>
            String(item.name).substring(0, searchInput.length).toLowerCase() ===
            searchInput.toLowerCase()
        )
        .sort(function (a, b) {
          if (a.firstName < b.firstName) {
            return -1;
          }
          if (a.firstName > b.firstName) {
            return 1;
          }
          return 0;
        })
        .map((contact, index) => {
          return (
            <ContactCard
              key={index}
              contactDetails={contact}
              width={width}
              height={height}
            />
          );
        })}
    </ScrollView>
  );
};

export default ContactsList;
