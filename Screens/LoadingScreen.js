import * as React from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';

function LoadingScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate('Home');
  }, 3000);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#916306" barStyle="dark-content" />
      <View style={styles.form}>
        <Image
          style={styles.logo}
          source={require('./Images/Logo.png')}>
        </Image>
        <Image
          style={styles.load}
          source={require('./Images/hug.gif')}>
        </Image>
      </View>
    </View>
  );
}

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
  logo: {
    marginTop: 150,
    width: "100%",
    height: 160,
    alignSelf: 'center',
  },
  load: {
    width: 30,
    height: 30,
    marginTop: 150,
  },
  label: {
    fontSize: 18,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    textAlignVertical: 'top',
    marginTop: 10,
  },
  screenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 50,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'black',
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

export default LoadingScreen;