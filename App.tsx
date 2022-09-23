import {StatusBar} from "expo-status-bar";
import {
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableHighlight,
    ActivityIndicator,
    Alert,
    Button,
    FlatList,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TextInput, Pressable, ListRenderItem
} from "react-native";
import {useState} from "react";

const {width,height} = Dimensions.get('screen')
const WIDTH = width
const HEIGHT = height

export default function App() {
    const array = new Array(50).fill(null).map((el, index) => ({
        id: index + 1,
        title: `title ${index + 1}`,
        price: Math.floor(Math.random() * 100)
    }))
    const render: ListRenderItem<any> = ({item}) => {
        return <View style={styles.item}>
            <View style={styles.content}>
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>
            </View>
        </View>
    }
    const [value, setValue] = useState("")
    return (
        <View style={styles.container}>
            <FlatList
                //horizontal
                data={array}
                renderItem={render}
                numColumns={2}
                columnWrapperStyle={{justifyContent:'space-between'}}
            />
            {/*<TouchableOpacity style={styles.common}>*/}
            {/*    <Text style={styles.title}>Hello TouchableOpacity!</Text>*/}
            {/*</TouchableOpacity>*/}

            {/*<TouchableWithoutFeedback style={styles.common} onPress={()=>console.log('yo')}>*/}
            {/*    <View style={styles.common}>*/}
            {/*        <Text style={styles.title}>Hello TouchableOpacity!</Text>*/}
            {/*    </View>*/}
            {/*</TouchableWithoutFeedback>*/}

            {/*<TouchableHighlight style={styles.common} onPress={()=>{}}>*/}
            {/*    <Text style={styles.title}>Hello TouchableOpacity!</Text>*/}
            {/*</TouchableHighlight>*/}

            {/*<Pressable onPress={()=>{}}>*/}
            {/*    {*/}
            {/*        ({pressed})=>(<Text>{pressed? `press`: 'yo yo yo'}</Text>)*/}
            {/*    }*/}
            {/*</Pressable>*/}

            {/*<ActivityIndicator/>*/}
            {/*<ActivityIndicator size="large"/>*/}
            {/*<ActivityIndicator size="small" color="#0000ff"/>*/}
            {/*<ActivityIndicator size="large" color="#00ff00"/>*/}
            {/*<Button*/}
            {/*    title="Press me"*/}
            {/*    onPress={() => Alert.alert("Simple Button pressed")}*/}
            {/*/>*/}
            {/*<Image*/}
            {/*    style={{width: 150, height: 150}}*/}
            {/*    source={{*/}
            {/*        uri: "https://reactnative.dev/img/tiny_logo.png",*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<TextInput*/}
            {/*    style={{*/}
            {/*        height: 45,*/}
            {/*        width: 200,*/}
            {/*        borderWidth: 1,*/}
            {/*        backgroundColor: "blue",*/}
            {/*        color: "white",*/}
            {/*        fontSize: 22,*/}
            {/*        margin: 20*/}
            {/*    }}*/}
            {/*    onChangeText={setValue}*/}
            {/*    value={value}*/}
            {/*/>*/}
            {/*<Text>{value}</Text>*/}

            {/*<View style={{height: 100, width: 100, margin: 5, backgroundColor: 'red'}}></View>*/}
            {/*<View style={{height: 100, width: 100, margin: 5, backgroundColor: 'pink'}}></View>*/}
            {/*<View style={{height: 100, width: 100, margin: 5, backgroundColor: 'yellow'}}></View>*/}
            {/*<View style={{height: 100, width: 100, margin: 5, backgroundColor: 'blue'}}></View>*/}
            {/*<View style={{height: 100, width: 100, margin: 5, backgroundColor: 'black'}}></View>*/}
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        flexDirection: "row",
        flexWrap: "wrap"
        // alignItems: "center",
        // justifyContent: "center",
    },
    item: {
        marginVertical: 5,
        padding: 10,
        width: ((WIDTH-10*2)-10)/2,
        height: ((WIDTH-10*2)-10)/2,
        borderWidth: 1,
        borderRadius: 10
    },
    content: {
        backgroundColor: 'pink',
        padding: 10,
        flex: 1,
        borderRadius: 5
    }
    // common: {
    //     width: "100%",
    //     backgroundColor: "blue",
    //     height: 40,
    //     alignItems: "center",
    //     justifyContent: "center",
    //     marginVertical: 10
    // },
    // title: {
    //     color: "white",
    //     fontSize: 20,
    //     fontWeight: "500"
    // }
});
