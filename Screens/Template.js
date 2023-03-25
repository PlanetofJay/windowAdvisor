import React, { useState } from "react";
import { Alert, View, StatusBar, Text, TouchableOpacity, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export default function Template() {

  const [chooseColor, setChooseColor] = useState('');

  alertUser = async () => {
    Alert.alert("Processing");
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#916306" barStyle="light-content" />
      <View style={styles.form}>

        <Text style={styles.label}>Background with 6 different colors</Text>
        
        <RNPickerSelect 
          onValueChange={(chooseColor) => setChooseColor(chooseColor)}
          items={[
            { value: 'blue', label: 'Blue' },
            { value: 'red', label: 'Red' },
            { value: 'green', label: 'Green' },
            { value: 'yellow', label: 'Yellow' },
            { value: 'black', label: 'Black' },
            { value: 'white', label: 'White' }        
          ]}
          style={styles.option}
        />

        <TouchableOpacity style={styles.screenButton} onPress={() => alertUser()} underlayColor='#fff'>
          <Text style={styles.buttonText}>Choose this color</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
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
  },
  logo: {
    marginTop: 80,
    width: "100%",
    height: 160,
    alignSelf: 'center',
  },
  screenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 30,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#916306',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: "70%",
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  option: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30 // to ensure the text is never behind the icon
  }
});