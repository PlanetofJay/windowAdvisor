import React, { useState } from "react";
import { View, StatusBar, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export default function Template({ route, navigation }) {

  const { templateTitle, templateImage } = route.params;

  const [wallColor, setWallColor] = useState('#707070');
  const [wallFrame, setWallFrame] = useState(require('./Images/whiteframe.png'));
  const [wallFrameSelected, setWallFrameSelected] = useState(require('./Images/selectedDouble.png'));
  const [wallFrameUnselected, setWallFrameUnselected] = useState(require('./Images/unselectedSingle.png'));

  const [frame, setFrame] = useState('double');
  const [picture, setPicture] = useState((templateImage));

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
          onPress={() => alert('hello from Right Menu ')}
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
      setWallFrame(require('./Images/whiteFrame.png'));
      setWallFrameSelected(require('./Images/selectedDouble.png'));
      setWallFrameUnselected(require('./Images/unselectedSingle.png')); 
    }
    else {
      
    }
  }
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