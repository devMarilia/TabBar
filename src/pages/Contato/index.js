import React, {useState} from 'react'
import { View, Text, StyleSheet} from 'react-native'


export default function Contato(){
    const [text, setText] = useState('Contato')
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.title}>
             Seja bem vindo a área de contato!
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        marginTop: 25,
        fontSize: 25,
        fontWeight: "bold"
      },
      title: {
        marginTop: 25,
        marginBottom: 15,
        fontSize: 25,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }
})