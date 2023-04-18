import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen() {

    const [subject, setSubject] = useState('');
    onChangeHandlerName = (value) => {
        setSubject(value);
    }
  alertUser = async () => {
    Alert.alert("Color change is unavailabe at this time!");
  }

  const saveSubject = async () => {
    await AsyncStorage.removeItem('@subject');
    await AsyncStorage.setItem('@subject', JSON.stringify({ subject }));
    setSubject('');
    Alert.alert("Saved the subject!");
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
      <Text style={styles.label}>Enter subject that will be used For SMS and Email:</Text>
      <TextInput 
        style={styles.textInput} 
        numberOfLines={1}
        onChangeText={onChangeHandlerName} 
      />
       <TouchableOpacity style={styles.screenButton} onPress={() => saveSubject() } underlayColor='#fff'>
          <Text style={styles.buttonText}>Save SMS And Email Subject</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.screenButton} onPress={() => alertUser() } underlayColor='#fff'>
          <Text style={styles.buttonText} onPress={() => alertUser() }>Change To Light/Dark</Text>
       </TouchableOpacity>
      </View>
    </View>
  );
}

/*
 * Function: styles
 * Purpose: All the styles for the HomeScreen
 * Date: 2023-03-03
 */
const styles = StyleSheet.create({
  form: {
      margin: 30,
      marginTop: 60,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',  
  },

  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  label: {
    fontSize: 18,
    marginLeft: "5%",

},
textInput: {
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    textAlignVertical: 'top',
    marginTop: 10,
    width: "90%"
},
  logo: {
    marginTop: 80,
    width: "100%",
    height: 160,
    alignSelf: 'center',
  },
  screenButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:30,
    paddingTop:12,
    paddingBottom:12,
    backgroundColor:'#916306',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width: "70%",
  },
  buttonText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  },  
});