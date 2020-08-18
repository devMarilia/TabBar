import React, {useState} from 'react'
import { View, Text, StyleSheet} from 'react-native'


export default function Contato(){
    const [text, setText] = useState('Contato')
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