import * as Contacts from "expo-contacts";
import { useQuery } from "react-query";

function useDeviceContacts() {
  const result = useQuery("contacts", async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Image],
      });

      if (data.length > 0) {
        return data;
      }
    }
  });
  return result;
}

export { useDeviceContacts };
