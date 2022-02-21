import { Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ContactCard from '../Components/ContactCard';
import {useDeviceContacts} from '../hooks/useDeviceContacts'
import { Feather } from '@expo/vector-icons';


const {width,height} = Dimensions.get('screen')

const ContactsScreen = () =>{

    const contacts = useDeviceContacts()
    
   

    return(

        <View style={{
            width,height,backgroundColor: "#252026"
        }}>


        <View style={{
            width,
            height : height*0.2,
            backgroundColor : "#3c373d",
            alignItems : 'center'
           
        }}>
              {/* Add paricpants , cancel and next button*/}
            <View style={{
                width,
                height: height*0.12,
             
                flexDirection : 'row',
                alignItems : 'center',
                padding: 10,
                paddingTop : height*0.05,
                justifyContent : 'space-between'
            }}>

                <TouchableOpacity>
                    <Text
                    style={{
                        color : '#244c61',
                        fontSize : 20,
                       
                    }}
                    >Cancel</Text>
                </TouchableOpacity>

                <View style={{
                    alignItems : 'center'
                }}>
                    <Text
                    style={{
                        color: 'white',
                        fontSize : 20,
                        fontWeight : '600',
                        letterSpacing : 1
                    }}
                    >Add Participants</Text>
                    <Text style={{
                         color: 'white',
                         fontSize : 14,
                         lineHeight : 25
                    }}>3 / 256</Text>
                </View>


                <TouchableOpacity>
                    <Text
                    style={{
                        color : '#244c61',
                        fontSize : 20,
                      
                    }}
                    >Next</Text>
                </TouchableOpacity>
            </View>

                 

                {/* Search Input */}

           <View style={{
                width : width*0.96,
                height : height*0.05,
                borderRadius : 10,
                backgroundColor : "#4f4a50",
                flexDirection : 'row',
                alignItems : 'center',
                justifyContent : 'space-between',
                padding : 10
            }}>
                <Feather name="search" size={25} color="#a29da3" />

                <TextInput
                placeholder='Search'
                placeholderTextColor={"#a29da3"}
                style={{
                    color : "#a29da3",
                    fontWeight : '700',
                    fontSize : 20,
                    width : width*0.83,
                    height : "100%"
                }}
                />
            </View>
                
           
        </View>
                  {/*favorites container */}
        <View style={{
            width,
            height : height*0.15
        }}>
            

        </View>

        <FlatList
        data={contacts.sort((function(a, b){
            if(a.firstName < b.firstName ) { return -1; }
            if(a.firstName > b.firstName) { return 1; }
            return 0;
        }))}
        keyExtractor={(_,i) => i}
        renderItem={(contact)=>{
           return(
               <ContactCard key={contact.index} contactDetails={contact.item} width={width} height={height}/>
           )
        }}
        />
        </View>
    )

} 

export default ContactsScreen;