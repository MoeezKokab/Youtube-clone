import { StyleSheet, Text, View, Image , Dimensions} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Card = () => {
    return (
        <View style={{marginTop:10}}>
            <Image source={{ uri: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" }

            }
                style={styles.image} />
            <View style={{flexDirection:"row",marginLeft:5}}>
                <MaterialIcons name="account-circle" size={50} color="black" />
                <View style={{marginLeft:5}}>
                    <Text style={{fontSize:20,width:Dimensions.get("screen").width-50}} 
                    ellipsizeMode="tail" 
                    numberOfLines={2}>
                        this is my video this is my video this is my video this is my video this is my video this is my video this is my video this is my video this is my video this is my video </Text>
                    <Text>cccccccccc</Text>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: "100%"

    },
})
export default Card;