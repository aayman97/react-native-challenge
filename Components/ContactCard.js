import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';




const ContactCard =({contactDetails,width,height})=>{

    return(
        <Text>{contactDetails.name}</Text>
    )

}

export default ContactCard;