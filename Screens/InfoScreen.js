import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function InfoScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.form}>
      <Text style={styles.label}>Step #1: Select create a template</Text>
      <Text style={styles.label}>Step #2: Enter a template name</Text>
      <Text style={styles.label}>Step #3: Press the select image button and follow the prompts</Text>
      <Text style={styles.label}>Step #4: Press create template</Text>
      <Text style={styles.label}>Step #5: Select a template window</Text>
      <Text style={styles.label}>Step #6: Select the color under the background label to change the background of the wall</Text>
      <Text style={styles.label}>Step #7: Select the color under the background frame label to change the background of the frame</Text>
      <Text style={styles.label}>Step #8: Select the save button to be able to load the template</Text>
      <Text style={styles.label}>Step #9: Select the settings button to add to the sms and email</Text>
      <Text style={styles.label}>Step #10: Press the share button to share the template via sms or email</Text>
      <Text style={styles.label}>Thank you for using the our app!!!</Text>
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