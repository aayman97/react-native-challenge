import { View } from "react-native";
import { useQuery } from "react-query";
import * as Contacts from "expo-contacts";

const Trial = () => {
  const result = useQuery("contacts", async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Image],
      });

      if (data.length > 0) {
        console.log("data");
        return data;
      } else {
        return;
      }
    }
  });
  return <View>{console.log(result.data)}</View>;
};

export default Trial;
