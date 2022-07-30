import { width } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, Button, TouchableOpacity, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';



const News = ({ navigation }) => {
    const [articles, setArticles] = useState([])
    const [isLoader, setIsLoader] = useState(true)

    const getNEws = () => {
        let api = 'https://newsapi.org/v2/everything?q=tesla&from=2022-06-28&sortBy=publishedAhttps://newsapi.org/v2/everything?q=tesla&from=2022-06-28&sortBy=publishedAt&apiKey=28892bfefdbe4c91878991fd9b5ae987'
        axios.get(api)
            .then((success) => {
                setIsLoader(false)
                console.log(success)
                setArticles(success.data.articles)
            }

            ).catch((err) => {
                console.log(err)
            })

    }
    useEffect(() => {
        getNEws();
    }, [])

    const Nagigatetonews = (items) => {
        navigation.navigate('Render', {
            state: items,
            
        })
    }

    return (
        <View style={{ backgroundColor: 'lightgrey' }}>
            {
                isLoader ?
                    <View style={Styles.loader}>
                        <ActivityIndicator size='large' color='black' />
                    </View>
                    :
                    <ScrollView   >

                        <View onPress={(e) => Nagigatetonews(e)}>
                            {
                                articles.map((e, i) => {
                                    return (
                                        <TouchableOpacity onPress={() => Nagigatetonews(e)}>

                                            <View style={Styles.cardview}>
                                                <Text style={Styles.text} >
                                                    {e.title}
                                                    <Icon name='star' size={25} color='black'  />
                                                </Text>

                                                <View style={Styles.menu} >
                                                    <Text style={Styles.icons}>
                                                        <Icon name='menu' size={25} color='grey' />
                                                    </Text>
                                                    <Text style={Styles.author} >
                                                        {e.author}
                                                    </Text>
                                                </View>

                                                <Image

                                                    source={{ uri: e.urlToImage }}
                                                    style={{ width: '100%', height: 150 }}
                                                />
                                                <Text style={Styles.description} >
                                                    {e.description}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
            }
        </View>
    )
}

export default News

const Styles = StyleSheet.create({
    cardview: {
        marginHorizontal: 10,
        marginVertical: 6,
        backgroundColor: 'white',
        shadowColor: "black",
        shadowOpacity: 0.9,
        shadowRadius: 10,
        borderRadius: 5
    },
    text: {
        marginHorizontal: 7,
        marginVertical: 6,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    author: {
        marginHorizontal: 10,
        marginVertical: 8,
        color: 'grey',
        fontSize: 17,
    },
    description: {
        color: 'grey',
        fontSize: 14,
        marginVertical: 19,
        marginHorizontal: 5


    },
    loader: {
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    menu: {
        display: 'flex',
        flexDirection: 'row',


    },
    icons: {
        marginHorizontal: 10,
        marginVertical: 8,
    }


})