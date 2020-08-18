import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const navigation = useNavigation();
 return (
   <View style={styles.contaner}>
     <Text style={styles.text}>Home</Text>
     <Button
     title="Contato"
     onPress={ () => navigation.navigate('Contato') }/>
   </View>
  );
}
const styles = StyleSheet.create({ 
    container: { 
        flex: 1,
    },
    text: {
        alignContent: "center",
        textAlign: "center",
        fontSize: 18,
        marginTop: 15
    },
 
})