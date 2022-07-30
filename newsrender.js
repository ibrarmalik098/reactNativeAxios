import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const NewsRender = ({ navigation, route }) => {

    const { state } = route.params;

    const [render, setRender] = useState(state);


    useEffect(() => {
        setRender(state)
    }, [])
    console.log(state)
    return (
        <View style={{backgroundColor:"lightgrey",flex:1}}>
            <View style={Styles.cardview}>
                <View>
                    <Text style={Styles.text}>{render.title}</Text>
                </View>
                <View>
                    <Text style={Styles.author}>{render.author}</Text>
                </View>
                <Image
                    source={{ uri: render.urlToImage }}
                    style={{ width: '100%', height: 200 }}
                />
                <Text style={Styles.description}>{render.description}</Text>
            </View>

        </View>
    )
}

export default NewsRender

const Styles = StyleSheet.create({
    cardview: {
        marginHorizontal: 10,
        marginVertical: 6,
        backgroundColor: 'white',
        shadowColor: "black",
        shadowOpacity: 0.9,
        shadowRadius: 10,
        borderRadius: 5,
        justifyContent:'center',
        marginTop:100,
        
        
    },
    text: {
        marginHorizontal: 7,
        marginVertical: 6,
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
    },
    author: {
        marginHorizontal: 10,
        marginVertical: 8,
        color: 'grey',
        fontSize: 19,
    },
    description: {
        color: 'grey',
        fontSize: 14,
        marginVertical: 19,
        marginHorizontal: 5


    },
}) 