import React from 'react'
import { StyleSheet, Text,View, TouchableOpacity, ScrollView } from 'react-native'

const DetailScreen = ({route,navigation}) => {
    const data = route.params
    return (
        <ScrollView >
            <View style={styles.viewContainer}>
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    style={styles.container}>
                    <Text style={styles.text}>{data.text}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


export default DetailScreen

const styles = StyleSheet.create({
    viewContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:10,
    },
    container: {
        flex: 1,
        marginTop:20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        height:'100%',
        width:'100%',
        backgroundColor: '#FFF',
        padding:20,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
	          width: 0,
	          height: 2,
                  },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text:{
        fontSize:16,
        fontWeight: 'bold'
    }
})
