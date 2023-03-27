import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, TextInput, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

export default function CreateTemplate({ navigation }) {
  [templateName, setName] = useState();
  const [image, setImage] = useState(null);

  onChangeHandlerName = (value) => {
    setName(value);
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setImage(result.assets[0].uri);
  };

  const createTemplate = async () => {
    Alert.alert("Template Created!");
    navigation.navigate('Template', {templateTitle: title, templateImage: image}) 
  };


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#916306" barStyle="light-content" />
      <View style={styles.form}>
      <Text style={styles.label}>Template Name:</Text>
      <TextInput 
        style={styles.textInput} 
        numberOfLines={1}
        onChangeText={onChangeHandlerName} 
      />
      <Text style={styles.label}>Select An Image:</Text>
      <TouchableOpacity style = {styles.screenButton2} onPress={pickImage} underlayColor='#fff'>
        {image && <Image source={{ uri: image }} style={{ width: "100%", height: "100%" }} />}
      </TouchableOpacity>
      <TouchableOpacity style={styles.screenButton} onPress={createTemplate} underlayColor='#fff'>
          <Text style={styles.buttonText}>Create Template</Text>
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
    marginLeft: "-50%",

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
screenButton2:{
  alignItems: 'center',
  marginTop:10,
  backgroundColor:'#7FBBFF',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fff',
  width: "40%",
  height: 120,
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