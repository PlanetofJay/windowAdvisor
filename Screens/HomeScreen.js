import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {

  const loadTemplate = async () => {
    AsyncStorage.getItem('@template')
      .then((value) => {
        const data = JSON.parse(value);
        navigation.navigate('Template', { templateTitle: data.templateTitle, templateImage: data.picture, templateWallColor: data.wallColor })
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image
          style={styles.logo}
          source={require('./Images/Logo.png')}>
        </Image>
        <Text style={styles.label}>Welcome!</Text>
        <TouchableOpacity style={styles.screenButton} onPress={() => navigation.navigate('CreateTemplate')} underlayColor='#fff'>
          <Text style={styles.buttonText}>Create Template</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.screenButton} onPress={() => loadTemplate()} underlayColor='#fff'>
          <Text style={styles.buttonText}>Load Template</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.screenButton} onPress={() => navigation.navigate('Settings')} underlayColor='#fff'>
          <Text style={styles.buttonText}>Settings</Text>
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
});