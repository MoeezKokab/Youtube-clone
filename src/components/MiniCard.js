import { View, Image, Text, Dimensions } from "react-native";

const MiniCard = (props) => {
    return (
        <View style={{ flexDirection: "row", margin: 10, marginBottom: 0 }}>
           
            <Image source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }}
                style={{
                    height: 100,
                    width: "45%"
                }} />
            <View style={{ margin: 5 }}>
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
                    {props.title}
                </Text>
                <Text style={{ fontSize: 12 }}>
                    {props.channel}
                </Text>
            </View>


        </View>
    )
    
}

export default MiniCard