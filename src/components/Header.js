
import { StyleSheet, Text, View } from 'react-native';
import Color from '../constant/Color';
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



import Constants from 'expo-constants';

export default function Header() {
    const navigation = useNavigation();
    return (
        <View style={styles.topView}>
            <View style={styles.logoView}>
                <AntDesign name="youtube" size={32} color="red" />
                <Text style={styles.text}>Youtube</Text>
            </View>
            <View style={styles.icon}>
                <Entypo name="video-camera" size={24} color="black" />
                <MaterialIcons name="account-circle" size={24} color="black" />
                <AntDesign name="search1" size={24} color="black" onPress={()=>{navigation.navigate('search')}} />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topView: {
        marginTop: Constants.statusBarHeight,
        height: 40,
        flexDirection: "row",
        backgroundColor: Color.headerBackColor,
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    logoView: { flexDirection: "row", padding: 5 },
    text: {
        fontSize: 20,
        margin: 3,

    },
    icon: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 100
    }
})
