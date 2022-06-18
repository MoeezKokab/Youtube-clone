import { View, TextInput } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useState } from 'react';
import Constants from 'expo-constants';

const Search = () => {
    const [input, setInput] = useState()
    return (
        <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
            <View style={{
                padding:5,
                flexDirection: "row",
                justifyContent: "space-between",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                
                elevation: 3,
                backgroundColor: "white"
            }}>
                <AntDesign name="back" size={24} color="black" />
                <TextInput
                    value={input}
                    onChangeText={(txt) => setInput(txt)}
                    style={{ width: "80%", borderWidth:2 , backgroundColor:"#e6e6e6",borderEndWidth:1,borderLeftWidth:1 }}
                />
                <Feather name="send" size={24} color="black" />
            </View>

        </View>
    )
}

export default Search;