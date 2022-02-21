import React, { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";

function useDeviceContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Image],
        });

        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  return contacts;
}

export { useDeviceContacts };
