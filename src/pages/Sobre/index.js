import React, {useState} from 'react'
import { View, Text, StyleSheet} from 'react-native'


export default function Sobre(){
    const [text, setText] = useState('Sobre')
    return(
        <View style={styles.container}>
            <Text>{text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})