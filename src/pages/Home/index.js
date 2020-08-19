import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';




export default function Home() {
  const navigation = useNavigation();

 return (
   <View style={styles.contaner}>
        <View style={styles.viewContainer}>
          <Text style={styles.text}>Home</Text>
          <Text style={styles.title}>
             Ao clicar no botão você será redirecionado para área de contato
            </Text>
            <View style={styles.containerBtn}>
            <TouchableOpacity
              style={[styles.btn, {backgroundColor: "#000"}]}
              onPress={ () => navigation.navigate('Contato') }>
              <Text style={styles.textBtn}>Contato</Text>
            </TouchableOpacity>
        </View>
     </View>
   </View>
  );
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
    },
    viewContainer: {
      alignItems: "center",
    
    },
    
    containerBtn: {
      marginTop: 15,
      justifyContent: "flex-start"
    },
    btn: {
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      padding: 15,
      backgroundColor: "#333",
      marginTop: 25,
      
    },
    textBtn: {
      fontSize: 22,
      color: "#FFF",
      textAlign: "center"
    }
 
})