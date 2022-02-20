import { useState } from 'react';
import {Text, View,Image, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';



const ContactCard =({contactDetails,width,height})=>{

    const [selected,isSelected] = useState(false)
    return(
        
       <View style={{
           width: width,height: height*0.072,padding :10,
           flexDirection : 'row',
           justifyContent : 'space-between',
           
       }}>
           {contactDetails.imageAvailable ? <Image 
           source={{uri : contactDetails.image.uri}}
           style={{
               width:  height*0.052,
               height :  height*0.052,
               resizeMode : "contain",
               borderRadius : height*0.052,
               transform : [{
                   scale : 1.0
               }],
               alignSelf : 'center'
           }}
           /> : <Image 
           source={require("../assets/Images/avatar.png")}
           style={{
               width:  height*0.052,
               height :  height*0.052,
               resizeMode : "contain",
               borderRadius : height*0.052,
               transform : [{
                   scale : 1.0
               }],
               alignSelf : 'center'
           }}
           />
}
            <View style={{
                flexDirection : 'row',
                justifyContent : 'space-between',
                width : width*0.8,
                borderBottomWidth : 2,borderColor : "#2d282e"
            }}>
                <Text style={{
                color : "white",
                fontSize : 18,
                fontWeight : 'bold'
            }}>{contactDetails.name}</Text>

            <TouchableOpacity onPress={() =>{
                isSelected(!selected)
            }}>
              { selected ? <View style={{
                    height: height*0.035,
                    width :  height*0.035,
                    borderRadius : "100%",
                    borderWidth : 2,
                    borderColor : "transparent",
                    backgroundColor : '#1a8fcb',
                    justifyContent : 'center',
                    alignItems : 'center'
                }}>
                  <FontAwesome5 name="check" size={15} color="#252026" />
                 </View>   
                     :  <View style={{
                    height: height*0.035,
                    width :  height*0.035,
                    borderRadius : "100%",
                    borderWidth : 2,
                    borderColor : "#2d282e"
                }}/>}
            </TouchableOpacity>

           
            </View>
       </View>
    )

}

export default ContactCard;