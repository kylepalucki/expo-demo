import React from 'react';
import { Image,  StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import logo from './assets/logo.png';
import * as ImagePicker from 'expo-image-picker';
export default function App() {
	
	let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }

  return (
    <View style={styles.container}>
	
		<Text style={{color: '#888', fontSize: 18}}> 
			Tap the logo to share a photo from your device!
		</Text>
		<br/>
		<TouchableOpacity
        onPress={openImagePickerAsync}
        style={{ backgroundColor: 'gray' }}>
		<Image source={logo} style={{ width: 305, height: 159 }} /> 
		</TouchableOpacity>
		
	</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
});