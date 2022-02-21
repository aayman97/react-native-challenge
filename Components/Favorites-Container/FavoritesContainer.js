import { Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {connect} from 'react-redux'

const FavoritesContainer = ({width,height,favorites})=>{

 
    return(
        <View style={{
            width,
            height : height*0.15
        }}>
               <Text style={{
                   fontSize : 30,
                   color : "white"
               }}>{favorites.length}</Text>

        </View>
     
    )
}


function mapStateToProps(state){
    return {
        favorites : state,
    }
}
function mapDispatchToProps(dispatch){
    return {
        addToFavorites : (item) => dispatch({type : 'ADD_TO_FAVORITES',payload : item}),
        removeFromFavorites : (item) => dispatch({type : 'REMOVE_FROM_FAVORITES',payload : item})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FavoritesContainer);
