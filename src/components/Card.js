import { StyleSheet, Text, View, Image } from 'react-native';


const Card = () => {
    return (
        <View>
            <Image source={{ uri: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" }

            } 
            style={{height:100,width:"100%"}}/>
        </View>
    )

}

export default Card;