import React, { useState } from "react";
import { View, StatusBar, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as MailComposer from 'expo-mail-composer';
import * as SMS from 'expo-sms';

export default function Template({ route, navigation }) {

  const { templateTitle, templateImage, templateWallColor } = route.params;

  const [wallColor, setWallColor] = useState((templateWallColor));
  const [wallFrame, setWallFrame] = useState(require('./Images/whiteframe.png'));
  const [wallFrameSelected, setWallFrameSelected] = useState(require('./Images/selectedDouble.png'));
  const [wallFrameUnselected, setWallFrameUnselected] = useState(require('./Images/unselectedSingle.png'));

  const [frame, setFrame] = useState('double');
  const [picture, setPicture] = useState((templateImage));
  const [dataSubject, setDataSubject] = useState('');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setPicture((result.assets[0].uri));
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: templateTitle,
      headerStyle: {
        headerTintColor: '#fff',
        backgroundColor: '#916306',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 15,
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Info')}
        >
          <Image source={require('./Images/info.png')} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => shareTemplate()}
        >
          <Image source={require('./Images/send.png')} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const changeBackground = (e) => {
    setWallColor(e);
  }

  const changeFrameBackground = (e) => {
    if (e === 'white' && frame === 'double') {
      setWallFrame(require('./Images/whiteframe.png'));
    }
    else if (e === 'black' && frame === 'double') {
      setWallFrame(require('./Images/blackframe.png'));
    }
    else if (e === 'wood' && frame === 'double') {
      setWallFrame(require('./Images/woodframe.png'));
    }
    else if (e === 'white' && frame === 'single') {
      setWallFrame(require('./Images/singleWhiteFrame.png'));
    }
    else if (e === 'black' && frame === 'single') {
      setWallFrame(require('./Images/singleBlackFrame.png'));
    }
    else if (e === 'wood' && frame === 'single') {
      setWallFrame(require('./Images/singleWoodFrame.png'));
    }
    else {
      setWallFrame(require('./Images/whiteframe.png'));
    }
  }

  const changeFrame = (e) => {
    if (e === 'single') {
      setFrame('single');
      setWallFrame(require('./Images/singleWhiteFrame.png'));
      setWallFrameSelected(require('./Images/unselectedDouble.png'));
      setWallFrameUnselected(require('./Images/selectedSingle.png'));
    }
    else if (e === 'double') {
      setFrame('double');
      setWallFrame(require('./Images/whiteframe.png'));
      setWallFrameSelected(require('./Images/selectedDouble.png'));
      setWallFrameUnselected(require('./Images/unselectedSingle.png'));
    }
    else { }
  }

  const saveTemplate = async () => {
    await AsyncStorage.removeItem('@template');
    await AsyncStorage.setItem('@template', JSON.stringify({ templateTitle, wallColor, frame, picture }))
    Alert.alert("Saved the template!");
  }

  const shareTemplate = async () => {
    Alert.alert('Please select How you would like to share', '', [
      {
        text: 'Email',
        onPress: () => sendMessageWithEmail(),
        style: 'cancel',
      },
      { text: 'SMS', onPress: () => sendMessageWithSMS() },
    ]);
  }

  sendMessageWithEmail = async () => {

    AsyncStorage.getItem('@subject')
      .then((value) => {
        const data = JSON.parse(value);
        setDataSubject(data.subject);
      });

    const isAvailable = await MailComposer.isAvailableAsync();

    if (isAvailable) {
      var options = {
        // Simulator must be connected to the internet in order to work!r
        recipients: [''],
        subject: dataSubject,
        body: templateTitle,
        attachments: templateImage,
      };

      MailComposer.composeAsync(options).then((result) => {
        if (result.status === "sent") {
          Alert.alert("Your email has been sent successfully");
        }
      });

    }

  }

  sendMessageWithSMS = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      const { result } = await SMS.sendSMSAsync(
        ['519-871-1264'],
        message = "" + templateTitle,
        {
          attachments: {
            uri: templateImage,
            mimeType: 'image/png',
            filename: 'file.png',
          },
        }
      );

      if (result === "sent") {
        Alert.alert("Your SMS has been sent successfully!")
      }
    } else {
      console.log("SMS is not available on this device");
    }
  }

  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="#916306" barStyle="light-content" />

      <View style={styles.form}>
        <View style={[styles.wall, { backgroundColor: wallColor }]}>
          <View style={styles.screenButton2} underlayColor='#fff'>
            {picture && <Image source={{ uri: picture }} style={{ width: "100%", height: "100%" }} />}
            <Image source={(wallFrame)} style={{ marginTop: "-72%", width: "100%", height: "100%" }} />
          </View>
        </View>
      </View>

      <Text style={styles.label}>Change background Color:</Text>

      <View style={{ flexDirection: "row", marginTop: 10, paddingBottom: 10 }}>
        <TouchableOpacity style={{
          marginRight: 10, marginLeft: 10, borderWidth: 1, borderColor: '#707070', height: 20, width: 20,
          float: 'right', backgroundColor: 'white'
        }} onPress={() => changeBackground('white')}>
        </TouchableOpacity>
        <TouchableOpacity style={{
          marginRight: 10, marginLeft: 10, borderWidth: 1, borderColor: '#707070', height: 20, width: 20,
          float: 'right', backgroundColor: '#707070'
        }} onPress={() => changeBackground('#707070')}>
        </TouchableOpacity>
        <TouchableOpacity style={{
          marginRight: 10, marginLeft: 10, borderWidth: 1, borderColor: '#707070', height: 20, width: 20,
          float: 'right', backgroundColor: '#805858'
        }} onPress={() => changeBackground('#805858')}>
        </TouchableOpacity>
        <TouchableOpacity style={{
          marginRight: 10, marginLeft: 10, borderWidth: 1, borderColor: '#707070', height: 20, width: 20,
          float: 'right', backgroundColor: '#2A7E7E'
        }} onPress={() => changeBackground('#2A7E7E')}>
        </TouchableOpacity>
        <TouchableOpacity style={{
          marginRight: 10, marginLeft: 10, borderWidth: 1, borderColor: '#707070', height: 20, width: 20,
          float: 'right', backgroundColor: '#B6B796'
        }} onPress={() => changeBackground('#B6B796')}>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Change frame Color:</Text>

      <View style={{ flexDirection: "row", marginTop: 10, paddingBottom: 10 }}>
        <TouchableOpacity style={{
          marginRight: 10, marginLeft: 10, borderWidth: 1, borderColor: '#707070', height: 20, width: 20,
          float: 'right', backgroundColor: 'white'
        }} onPress={() => changeFrameBackground('white')}>
        </TouchableOpacity>
        <TouchableOpacity style={{
          marginRight: 10, marginLeft: 10, borderWidth: 1, borderColor: '#707070', height: 20, width: 20,
          float: 'right', backgroundColor: 'black'
        }} onPress={() => changeFrameBackground('black')}>
        </TouchableOpacity>
        <TouchableOpacity style={{
          marginRight: 10, marginLeft: 10, borderWidth: 1, borderColor: '#707070', height: 20, width: 20,
          float: 'right', backgroundColor: '#A15932'
        }} onPress={() => changeFrameBackground('wood')}>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Select Template:</Text>

      <View style={{ flexDirection: "row", marginTop: 10, paddingBottom: 10 }}>
        <TouchableOpacity style={{ marginLeft: 10, marginTop: 5 }}
          onPress={() => changeFrame('double')}>
          <Image source={(wallFrameSelected)} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 10, marginTop: 5 }}
          onPress={() => changeFrame('single')}>
          <Image source={(wallFrameUnselected)} />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.screenButton3} onPress={saveTemplate} underlayColor='#fff'>
        <Text style={styles.buttonText}>Save Template</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.screenButton3} onPress={() => navigation.navigate('Home')} underlayColor='#fff'>
        <Text style={styles.buttonText}>Go To Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: "-120%", marginLeft: "90%" }}
        onPress={pickImage}>
        <Image source={require('./Images/pencil.png')} />
      </TouchableOpacity>

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
    marginTop: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  wall: {
    width: "100%",
    height: 300,
    marginTop: -60,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginLeft: 10,
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
  screenButton2: {
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#7FBBFF',
    borderRadius: 0,
    width: 320,
    height: 230,
  },
  frame: {
    alignItems: 'center',
    marginTop: 0,
    borderRadius: 0,
    width: 250,
    height: 230,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  screenButton3: {
    marginRight: 40,
    marginLeft: 60,
    marginTop: 30,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#916306',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: "70%",
  },
});