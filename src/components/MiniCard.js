import { View, Image, Text, Dimensions } from "react-native";

const MiniCard = () => {
    return (
        <View style={{ flexDirection: "row",margin:10,marginBottom:0 }}>
            <Image source={{ uri: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" }}
                style={{
                    height: 100,
                    width: "45%"
                }} />
            <View style={{margin:5}}>
                <Text
                    style=
                    {{
                        width: Dimensions.get("screen").width / 2,
                        fontSize: 15,
                        fontStyle: "italic"
                    }}
                    ellipsizeMode="tail"
                    numberOfLines={2}
                >
                    This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video This is my video
                </Text>
                <Text style={{fontSize:12}}>jjjj</Text>
            </View>


        </View>
    )
}

export default MiniCard