import { View, TextInput, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useState } from 'react';
import Constants from 'expo-constants';
import MiniCard from '../components/MiniCard';
import { useNavigation } from '@react-navigation/native';


// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=Ironman&type=video&key=AIzaSyAtuydSMp1DlLb0l04cK6iz8gawQ9Kpee8

const Search = () => {
    const navigation = useNavigation();
    const [input, setInput] = useState()
    const [miniCard, setMiniCard] = useState([])
    const [loading, SetLoading] = useState(false)

    const fetchData = () => {
        SetLoading(true)

        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${input}&type=video&key=AIzaSyAtuydSMp1DlLb0l04cK6iz8gawQ9Kpee8`)
            .then(res => res.json()
                .then(data => {
                    SetLoading(false)
                    setMiniCard(data.items)
                    console.log(miniCard)

                }

                ))
    }
    return (
        <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
            <View style={{
                padding: 5,
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
                <AntDesign name="back" size={24} color="black" onPress={() => { navigation.goBack() }} />
                <TextInput
                    value={input}
                    onChangeText={(txt) => setInput(txt)}
                    style={{ width: "80%", borderWidth: 2, backgroundColor: "#e6e6e6", borderEndWidth: 1, borderLeftWidth: 1 }}
                />
                <Feather name="send" size={24} color="black" onPress={() => fetchData()
                } />
            </View>
            {loading ? <ActivityIndicator size="large" color='red' style={{ marginTop: 10 }} /> : null}
            <FlatList
                data={miniCard}
                renderItem={({ item }) => {
                    return <MiniCard
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                    />
                }}
                keyExtractor={(item) => { item.id.videoId }}
            />



        </View>
    )
}

export default Search;