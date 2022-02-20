import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import ContactCard from '../Components/ContactCard';
import {useDeviceContacts} from '../hooks/useDeviceContacts'


const {width,height} = Dimensions.get('screen')

const ContactsScreen = () =>{

    const contacts = useDeviceContacts()
    

    return(

        <View style={{
            width,height,backgroundColor: "#252026"
        }}>

        <FlatList
        data={contacts.sort((function(a, b){
            if(a.firstName < b.firstName) { return -1; }
            if(a.firstName > b.firstName) { return 1; }
            return 0;
        }))}
        keyExtractor={(_,i) => i}
        renderItem={(contact)=>{
           return(
               <ContactCard key={contact.index} contactDetails={contact.item} width height/>
           )
        }}
        />
        </View>
    )

} 

export default ContactsScreen;